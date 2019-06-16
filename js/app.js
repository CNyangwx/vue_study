var vue=new Vue({
    el:'#app',
    data:{
        'age':30,
        X:0,
        Y:0
    },
    methods:{
        add:function (age=1) {
            this.age += age;
        },
        subtract:function (age=1) {
            this.age -= age;
        },
        updateXY:function (event) {
            this.X = event.offsetX;
            this.Y = event.offsetY;
        },
        stopMoving:function (event) {
            event.stopPropagation();
        },
        alert2:function () {
            alert('Hello World');
        }
    }
});