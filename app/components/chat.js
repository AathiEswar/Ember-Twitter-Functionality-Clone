import Component from '@ember/component';

export default Component.extend({
    inputValue: "",
    actions: {
        async handleSubmit() {
            if (this.inputValue) {
                const model = this.get("model");
                const item = {
                    id: model.length + 1,
                    profile: {
                        username: "Aathi Eswar",
                        mail: "@aathieswar",
                        timeOfPost: Date.now(),
                    },
                    post: {
                        content: this.inputValue
                    }
                }
                try {
                    const res = await fetch("/api/posts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    const data = await res.json();

                    model.clear();
                    model.pushObjects(data);
                    this.set("inputValue", "")
                }
                catch (e) {
                    console.error(e)
                }
            }
        },
        async handlePostEdit(postId, inputValue) {
            try {
                const model = this.get("model")
                const res = await fetch(`/api/posts/${postId}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ content: inputValue })
                })
                const data = await res.json();

                model.clear();
                model.pushObjects(data);
            } catch (e) {
                console.error(e);
            }
        },
        async handleDelete(postId) {
            try {
                await fetch(`/api/posts/${postId}`, {
                    method: "DELETE"
                });
                const model = this.get("model");
                const index = model.findIndex((p) => p.id === postId);
                if (index !== -1) {
                    model.removeAt(index);
                }
            } catch (e) {
                console.error(e);
            }
        }
    }
});
