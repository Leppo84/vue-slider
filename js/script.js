const slider = new Vue({
    el : "#myApp",
    data : {
        activeSlide : 0,
        slides : [
            {
                image: 'img/01.jpg',
                title: 'Svezia',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
            },
            {
                image: 'img/02.jpg',
                title: 'Svizzera',
                text: 'Lorem ipsum.',
            },
            {
                image: 'img/03.jpg',
                title: 'Gran Bretagna',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
            },
            {
                image: 'img/04.jpg',
                title: 'Germania',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
            },
            {
                image: 'img/05.jpg',
                title: 'Paradise',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
            }
        ]
        
    },
    // document.onkeydown = checkKey;
    // function checkKey(e) {
        
        //     e = e || window.event;
        
        //     if (e.keyCode == '38') {
            //         // up arrow
            //     }
        //     else if (e.keyCode == '37') {
        //     // left arrow
        //     }
        //     else if (e.keyCode == '40') {
        //         // down arrow
        //     }
        //     else if (e.keyCode == '39') {
            //     // right arrow
        //     }
        
        // }
    created() {
        document.addEventListener('keydown', (event) => {
            const hit = event.key;
                if (hit == "ArrowUp" ) {
                    console.log("prev");
                    this.btnPrev();
                }
                else if (hit == "ArrowDown" ) {
                    console.log("next");
                    this.btnNext();
                }
            }
        )},
    methods : {
        btnNext() {
            if(this.activeSlide < this.slides.length - 1) {
                this.activeSlide++;
            }
            else {
                this.activeSlide = 0;
            }
            console.log(this.activeSlide);
            
            
        },
        btnPrev() {
            if(this.activeSlide > 0) {
                this.activeSlide--;
            }
            else {
                this.activeSlide = this.slides.length - 1;
            }
            console.log(this.activeSlide);
        },
        

    }
});