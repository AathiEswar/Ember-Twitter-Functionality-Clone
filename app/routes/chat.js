import Route from '@ember/routing/route';
import { A } from '@ember/array';

export default Route.extend({
    async model() {
        const response = await fetch('/api/posts');
        const resJson = await response.json();
        return A(resJson || []);
    }
});
