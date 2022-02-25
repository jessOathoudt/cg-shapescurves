class Renderer {
    // canvas:              object ({id: __, width: __, height: __})
    // num_curve_sections:  int
    constructor(canvas, num_curve_sections, show_points_flag) {
        this.canvas = document.getElementById(canvas.id);
        this.canvas.width = canvas.width;
        this.canvas.height = canvas.height;
        this.ctx = this.canvas.getContext('2d');
        this.slide_idx = 0;
        this.num_curve_sections = num_curve_sections;
        this.show_points = show_points_flag;
    }

    // n:  int
    setNumCurveSections(n) {
        this.num_curve_sections = n;
        this.drawSlide(this.slide_idx);
    }

    // flag:  bool
    showPoints(flag) {
        this.show_points = flag;
        this.drawSlide(this.slide_idx);
    }
    
    // slide_idx:  int
    drawSlide(slide_idx) {
        this.slide_idx = slide_idx;

        switch (this.slide_idx) {
            case 0:
                this.drawSlide0(this.ctx);
                break;
            case 1:
                this.drawSlide1(this.ctx);
                break;
            case 2:
                this.drawSlide2(this.ctx);
                break;
            case 3:
                this.drawSlide3(this.ctx);
                break;
        }
    }

    // ctx:          canvas context
    drawSlide0(ctx) {
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        //how to show this is false or true
        if(this.show_points==true){   
            this.drawRectangle({x: 100, y: 100}, {x: 700, y: 550}, [255,0,0,255], ctx);
            this.drawCircle({x: 100, y: 100},5,[0,0,255,255], ctx);
            this.drawCircle({x: 700, y:100}, 5, [0,0,255,255], ctx);
            this.drawCircle({x: 700, y: 550},5,[0,0,255,255], ctx);
            this.drawCircle({x: 100, y: 550},5,[0,0,255,255], ctx);
        } else{
            this.drawRectangle({x: 100, y: 100}, {x: 700, y: 550}, [255,0,0,255], ctx);
        }
    }

    // ctx:          canvas context
    drawSlide1(ctx) {
        let angle = 0;
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        if(this.show_points==true){
            this.drawCircle({x:400, y:325}, 200, [0,255,0,255], ctx);
            for(let i =1; i<= this.num_curve_sections; i++){
                this.drawCircle({x:400+200*Math.cos(angle), y:325+200*Math.sin(angle)}, 5, [255,0,0,255], ctx);
                angle = 2*i*Math.PI/this.num_curve_sections;
            }
        } else{
            this.drawCircle({x:400, y:325}, 200, [0,255,0,255], ctx);
        }
    }


    // ctx:          canvas context
    drawSlide2(ctx) {
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        if(this.show_points==true){
            this.drawBezierCurve({x: 100, y: 100}, {x: 200, y: 500}, {x: 600, y: 500}, {x: 700, y: 100}, [0,0,255,255], ctx);
            for(let t=0; t<1.01;){
                this.drawCircle({x: Math.pow((1-t), 3) * 100 + 3*Math.pow((1-t), 2) * t * 200 + 3 * (1-t) * Math.pow(t, 2) * 600 + Math.pow(t, 3) * 700, y: Math.pow((1-t), 3) * 100 + 3*Math.pow((1-t), 2) * t * 500 + 3 * (1-t) * Math.pow(t, 2) * 500 + Math.pow(t, 3) * 100}, 5, [255,0,0,255], ctx);
                this.drawCircle({x: 200, y: 500}, 5, [0,255,255,255], ctx);
                this.drawCircle({x: 600, y: 500}, 5, [0,255,255,255], ctx);
                t = 1/this.num_curve_sections+t;
            }
        }else{
            this.drawBezierCurve({x: 100, y: 100}, {x: 200, y: 500}, {x: 600, y: 500}, {x: 700, y: 100}, [0,0,255,255], ctx);
        }
    }

    // ctx:          canvas context
    drawSlide3(ctx) {
        ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
        if(this.show_points==true){
            this.drawName([155,0,255,255], ctx);
            //J
            this.drawCircle({x: 100, y:500}, 5, [255,0,255,255], ctx);
            this.drawCircle({x: 100, y:300}, 5, [255,0,255,255], ctx);
            for(let t=0; t<1.01;){
                this.drawCircle({x: Math.pow((1-t), 3) * 100 + 3*Math.pow((1-t), 2) * t * 100 + 3 * (1-t) * Math.pow(t, 2) * 40 + Math.pow(t, 3) * 30, 
                    y: Math.pow((1-t), 3) * 300 + 3*Math.pow((1-t), 2) * t * 100 + 3 * (1-t) * Math.pow(t, 2) * 50 + Math.pow(t, 3) * 300}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 100, y: 100}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 40, y: 50}, 5, [0,0,255,255], ctx);
                t = 1/this.num_curve_sections+t;
            }
            //E
            this.drawCircle({x: 125, y:200}, 5, [255,0,255,255], ctx);
            this.drawCircle({x: 100, y:300}, 5, [255,0,255,255], ctx);
            for(let t=0; t<1.01;){
                this.drawCircle({x: Math.pow((1-t), 3) * 225 + 3*Math.pow((1-t), 2) * t * 200 + 3 * (1-t) * Math.pow(t, 2) * 150 + Math.pow(t, 3) * 125, 
                    y: Math.pow((1-t), 3) * 200 + 3*Math.pow((1-t), 2) * t * 300 + 3 * (1-t) * Math.pow(t, 2) * 300 + Math.pow(t, 3) * 200}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 200, y: 300}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 150, y: 300}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: Math.pow((1-t), 3) * 125 + 3*Math.pow((1-t), 2) * t * 125 + 3 * (1-t) * Math.pow(t, 2) * 225 + Math.pow(t, 3) * 225, 
                    y: Math.pow((1-t), 3) * 200 + 3*Math.pow((1-t), 2) * t * 100 + 3 * (1-t) * Math.pow(t, 2) * 150 + Math.pow(t, 3) * 150}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 125, y: 100}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 225, y: 150}, 5, [0,0,255,255], ctx);
                //S
                this.drawCircle({x: Math.pow((1-t), 3) * 300 + 3*Math.pow((1-t), 2) * t * 225 + 3 * (1-t) * Math.pow(t, 2) * 250 + Math.pow(t, 3) * 300, 
                    y: Math.pow((1-t), 3) * 275 + 3*Math.pow((1-t), 2) * t * 250 + 3 * (1-t) * Math.pow(t, 2) * 250 + Math.pow(t, 3) * 200}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 225, y: 250}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 250, y: 250}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: Math.pow((1-t), 3) * 300 + 3*Math.pow((1-t), 2) * t * 325 + 3 * (1-t) * Math.pow(t, 2) * 325 + Math.pow(t, 3) * 250, 
                    y: Math.pow((1-t), 3) * 200 + 3*Math.pow((1-t), 2) * t * 175 + 3 * (1-t) * Math.pow(t, 2) * 100 + Math.pow(t, 3) * 150}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 325, y: 175}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 325, y: 100}, 5, [0,0,255,255], ctx);
                //S
                this.drawCircle({x: Math.pow((1-t), 3) * 375 + 3*Math.pow((1-t), 2) * t * 300 + 3 * (1-t) * Math.pow(t, 2) * 325 + Math.pow(t, 3) * 375, 
                    y: Math.pow((1-t), 3) * 275 + 3*Math.pow((1-t), 2) * t * 250 + 3 * (1-t) * Math.pow(t, 2) * 250 + Math.pow(t, 3) * 200}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 300, y: 250}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 325, y: 250}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: Math.pow((1-t), 3) * 375 + 3*Math.pow((1-t), 2) * t * 400 + 3 * (1-t) * Math.pow(t, 2) * 400 + Math.pow(t, 3) * 325, 
                    y: Math.pow((1-t), 3) * 200 + 3*Math.pow((1-t), 2) * t * 175 + 3 * (1-t) * Math.pow(t, 2) * 100 + Math.pow(t, 3) * 150}, 5, [255,0,255,255], ctx);
                this.drawCircle({x: 400, y: 175}, 5, [0,0,255,255], ctx);
                this.drawCircle({x: 400, y: 100}, 5, [0,0,255,255], ctx);
                //C
                this.drawCircle({x: Math.pow((1-t), 3) * 550 + 3*Math.pow((1-t), 2) * t * 520 + 3 * (1-t) * Math.pow(t, 2) * 330 + Math.pow(t, 3) * 550, 
                    y: Math.pow((1-t), 3) * 275 + 3*Math.pow((1-t), 2) * t * 275 + 3 * (1-t) * Math.pow(t, 2) * 200 + Math.pow(t, 3) * 140}, 5, [255,0,255,255], ctx);
                 this.drawCircle({x: 520, y: 275}, 5, [0,0,255,255], ctx);
                 this.drawCircle({x: 330, y: 200}, 5, [0,0,255,255], ctx);
                t = 1/this.num_curve_sections+t;
            }
            //I
            let angle =0;
            this.drawCircle({x: 425, y:275}, 5, [255,0,255,255], ctx);
            this.drawCircle({x: 425, y:130}, 5, [255,0,255,255], ctx);
            for(let i =1; i<= this.num_curve_sections; i++){
                this.drawCircle({x:425+10*Math.cos(angle), y:300+10*Math.sin(angle)}, 5, [255,0,255,255], ctx);
                //A
                this.drawCircle({x:625+60*Math.cos(angle), y:200+60*Math.sin(angle)}, 5, [255,0,255,255], ctx);
                angle = 2*i*Math.PI/this.num_curve_sections;
            }
            this.drawCircle({x: 685, y:250}, 5, [255,0,255,255], ctx);
            this.drawCircle({x: 685, y:125}, 5, [255,0,255,255], ctx);
        } else{
            this.drawName([155,0,255,255], ctx);
        }
    }

    drawName(color, ctx){
        //J
        this.drawLine({x: 100, y:500}, {x: 100, y:300}, color, ctx);
        this.drawBezierCurve({x: 100, y:300}, {x: 100, y:100}, {x:40, y: 50}, {x:30, y: 300}, color, ctx);
        //E
        this.drawLine({x: 125, y:200}, {x: 225, y:200}, color, ctx);
        this.drawBezierCurve({x: 225, y:200}, {x: 200, y:300}, {x: 150, y: 300}, {x:125, y: 200}, color, ctx);
        this.drawBezierCurve({x: 125, y:200}, {x: 125, y:100}, {x: 225, y: 150}, {x:225, y: 150}, color, ctx);
        //S
        this.drawBezierCurve({x: 300, y:275}, {x: 225, y:250}, {x: 250, y: 250}, {x:300, y: 200}, color, ctx);
        this.drawBezierCurve({x: 300, y:200}, {x: 325, y:175}, {x: 325, y: 100}, {x:250, y: 150}, color, ctx);
        //S
        this.drawBezierCurve({x: 375, y:275}, {x: 300, y:250}, {x: 325, y: 250}, {x:375, y: 200}, color, ctx);
        this.drawBezierCurve({x: 375, y:200}, {x: 400, y:175}, {x: 400, y: 100}, {x:325, y: 150}, color, ctx);
        //I
        this.drawLine({x:425, y: 275}, {x:425, y: 130}, color, ctx);
        this.drawCircle({x: 425, y: 300}, 10, color, ctx);
        //C
        this.drawBezierCurve({x: 550, y:275}, {x: 520, y:275}, {x: 330, y: 200}, {x:550, y: 140}, color, ctx);
        //A
        this.drawCircle({x: 625, y: 200}, 60, color, ctx);
        this.drawLine({x:685, y: 250}, {x:685, y: 125}, color, ctx);
    }

    // left_bottom:  object ({x: __, y: __})
    // right_top:    object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawRectangle(left_bottom, right_top, color, ctx) {
        
        this.drawLine(left_bottom, {x: 700, y:100}, color, ctx);
        this.drawLine({x: 700, y:100}, right_top, color, ctx);
        this.drawLine(right_top, {x: 100, y: 550}, color, ctx);
        this.drawLine({x: 100, y: 550}, left_bottom, color, ctx);
    }
    // center:       object ({x: __, y: __})
    // radius:       int
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawCircle(center, radius, color, ctx) {
      let angle =0;
      for(let i =1; i<= this.num_curve_sections; i++){
        let prevPoint = {x:center.x+radius*Math.cos(angle), y:center.y+radius*Math.sin(angle)};
        angle = 2*i*Math.PI/this.num_curve_sections;
        this.drawLine(prevPoint, {x:center.x+radius*Math.cos(angle), y:center.y+radius*Math.sin(angle)}, color, ctx);
    }
}

    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // pt2:          object ({x: __, y: __})
    // pt3:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawBezierCurve(pt0, pt1, pt2, pt3, color, ctx) {
        for(let t =0; t<= .99;){
            let prevPoint = {x: Math.pow((1-t), 3) * pt0.x + 3*Math.pow((1-t), 2) * t * pt1.x + 3 * (1-t) * Math.pow(t, 2) * pt2.x + Math.pow(t, 3) * pt3.x, y: Math.pow((1-t), 3) * pt0.y + 3*Math.pow((1-t), 2) * t * pt1.y + 3 * (1-t) * Math.pow(t, 2) * pt2.y + Math.pow(t, 3) * pt3.y};              
            t = 1/this.num_curve_sections+t;
            this.drawLine(prevPoint, {x: Math.pow((1-t), 3) * pt0.x + 3*Math.pow((1-t), 2) * t * pt1.x + 3 * (1-t) * Math.pow(t, 2) * pt2.x + Math.pow(t, 3) * pt3.x, y: Math.pow((1-t), 3) * pt0.y + 3*Math.pow((1-t), 2) * t * pt1.y + 3 * (1-t) * Math.pow(t, 2) * pt2.y + Math.pow(t, 3) * pt3.y}, color, ctx);
        }
    }


    // pt0:          object ({x: __, y: __})
    // pt1:          object ({x: __, y: __})
    // color:        array of int [R, G, B, A]
    // ctx:          canvas context
    drawLine(pt0, pt1, color, ctx)
    {
        ctx.strokeStyle = 'rgba(' + color[0] + ',' + color[1] + ',' + color[2] + ',' + (color[3]/255.0) + ')';
        ctx.beginPath();
        ctx.moveTo(pt0.x, pt0.y);
        ctx.lineTo(pt1.x, pt1.y);
        ctx.stroke();
    }
};
