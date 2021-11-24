document.addEventListener('DOMContentLoaded', () => {    
    const evalExpression = (expression) => {
        return Function(`"use strict";return (${expression})`)();
    };

    document.querySelectorAll('[v-data]').forEach((el) => {
        const data = evalExpression(el.getAttribute('v-data'));

        new Vue({
            el: el,
            data() {
                return data;
            },
            directives: {
                data: {
                    bind() {
                        // v-data has already been manually processed
                        // this is hack to silence Vue's warning
                    }
                }
            }
        });
    });
});
