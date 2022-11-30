const radians_to_degrees = rad => (rad * 180.0) / Math.PI;
const degrees_to_radians = deg => (deg * Math.PI) / 180.0;

console.log("Вітаю! Щоб розв'язати прямокутний трикутник, внесіть, будь ласка, дані: задайте два значення елементів та їх так звані типи, наприклад: triangle(7, 'leg', 18, 'hypotenuse'). Елементи мають такі типи: hypotenuse, leg, angle, opposite angle, adjacent angle");

function triangle(data1, type1, data2, type2) {

    var a;
    var b;
    var c;
    var alpha;
    var beta;

    var tria = new Object();
    tria[type1] = data1;
    tria[type2] = data2;

    tria["opposite angle"] = degrees_to_radians(tria["opposite angle"]);
    tria["adjacent angle"] = degrees_to_radians(tria["adjacent angle"]);
    tria["angle"] = degrees_to_radians(tria["angle"]);

    
    if (tria["leg"] && tria["hypotenuse"] && tria["hypotenuse"] > tria["leg"] && tria["hypotenuse"] > 0 && tria["leg"] > 0) {

        a = tria["leg"];
        c = tria["hypotenuse"];
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = Math.asin(a / c);
        beta = degrees_to_radians(90) - alpha;

    } else if (tria["angle"] && tria["hypotenuse"] && tria["angle"] < degrees_to_radians(90) && tria["angle"] > 0 && tria["hypotenuse"] > 0) {
        
        alpha = tria["angle"];
        c = tria["hypotenuse"];
        a = c * Math.sin(alpha);
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = degrees_to_radians(90) - alpha;

    } else if (tria["leg"] && tria["opposite angle"] && tria["leg"] > 0 && tria["opposite angle"] > 0 && tria["opposite angle"] < degrees_to_radians(90)) {
        
        a = tria["leg"];
        alpha = tria["opposite angle"];
        c = a / Math.sin(alpha);
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        beta = degrees_to_radians(90) - alpha;

    } else if (tria["leg"] && tria["adjacent angle"] && tria["leg"] > 0 && tria["adjacent angle"] > 0 && tria["adjacent angle"] < degrees_to_radians(90)) {
        
        a = tria["leg"];
        beta = tria["adjacent angle"];
        c = a / Math.cos(beta);
        b = Math.sqrt(Math.pow(c, 2) - Math.pow(a, 2));
        alpha = degrees_to_radians(90) - beta;

    } else if (type1 == "leg" && type2 == "leg" && data1 > 0 && data2 > 0) {
        
        a = data1;
        b = data2;
        c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
        alpha = Math.asin(a / c);
        beta = degrees_to_radians(90) - alpha;

    } else {

        console.log("Sorry! You are wrong. Read the instruction attentively!")

    }

    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
    console.log("alpha: " + radians_to_degrees(alpha));
    console.log("beta: " + radians_to_degrees(beta));
}