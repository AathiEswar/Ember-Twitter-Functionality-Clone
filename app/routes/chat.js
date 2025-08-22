import Route from '@ember/routing/route';

export default Route.extend({
    async model() {
        const data = await fetch('/api/posts')
        const resJson = data.json()
        return resJson
    }
});
