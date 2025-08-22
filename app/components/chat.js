import Component from '@ember/component';

export default Component.extend({
    inputValue: "",
    actions: {
        async handleSubmit() {
            if (this.inputValue) {
                const item = {
                    profile: {
                        username: "Aathi Eswar",
                        mail: "@aathieswar",
                        timeOfPost: Date.now(),
                    },
                    post: {
                        content: this.inputValue
                    }
                }
                try{
                    this.get("model").pushObject(item);
                    await fetch("/api/posts", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(item)
                    });
                    this.set("inputValue", "")
                }
                catch(e){
                    console.error(e)
                }
            }
        },
    }
});
