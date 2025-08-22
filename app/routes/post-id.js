import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const data = await fetch(`/api/posts/${params.id}`)
        const resJson = data.json()
        return resJson
    }
});
