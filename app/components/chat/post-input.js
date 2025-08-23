import Component from '@ember/component';
import { computed } from "@ember/object";

export default Component.extend({
    maxCount: 40,
    
    inputCount: computed('inputValue', function() {
        return this.inputValue ? this.inputValue.length : 0;
    }),
});
