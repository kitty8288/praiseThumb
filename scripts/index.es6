class praiseButton {
    constructor(num, el) {
        this.num = num;
        this.el = el;
    }
    clickAction() {
        this.el.click((num, el) => {
            if (this.num<10){
                this.num++;
                this.el.removeClass('off');
                $('.count').text("点赞次数为"+this.num+"次");
            }else{
                this.num=0;
                this.el.addClass('off');
                $('.count').text("点赞次数为0次");

            }
        })
  
    }
}
class Thumb extends praiseButton{
    constructor(num,el){
        super(num,el);
    }
}
export default Thumb