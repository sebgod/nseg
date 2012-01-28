var rounds = 100, counter = 100;

/*

var mmseg = require("mmseg");
var q = mmseg.open('/usr/local/etc/');

function runmmseg() {
    var ar = q.complexSegmentSync("在我的后园，可以看见墙外有两株树，一株是枣树，还有一株也是枣树。 这上面的夜的天空，奇怪而高，我生平没有见过这样的奇怪而高的天空。他仿佛要离开 人间而去，使人们仰面不再看见。然而现在却非常之蓝，闪闪地着几十个星星的眼，冷 眼。他的口角上现出微笑，似乎自以为大有深意，而将繁霜洒在我的园里的野花草上。 我不知道那些花草真叫什么名字，人们叫他们什么名字。我记得有一种开过极细小的粉 红花，现在还开着，但是更极细小了，她在冷的夜气中，瑟缩地做梦，梦见春的到来，梦见秋的到来，梦见瘦的诗人将眼泪擦在她最末的花瓣上，告诉她秋虽然来，冬虽然来，而此后接着还是春，胡蝶乱飞，蜜蜂都唱起春词来了。她于是一笑，虽然颜色冻得红惨惨地，仍然瑟缩着。 枣树，他们简直落尽了叶子。先前，还有一两个孩子来打他们别人打剩的枣子，现在是 一个也不剩了，连叶子也落尽了，他知道小粉红花的梦，秋后要有春；他也知道落叶的梦，春后还是秋。他简直落尽叶子，单剩干子，然而脱了当初满树是果实和叶子时候的弧形，欠伸得很舒服。但是，有几枝还低亚着，护定他从打枣的竿梢所得的皮伤，而最直最长的几 枝，却已默默地铁似的直刺着奇怪而高的天空，使天空闪闪地鬼眼；直刺着天空中圆满的 月亮，使月亮窘得发白。 鬼眨眼的天空越加非常之蓝，不安了，仿佛想离去人间，避开枣树，只将月亮剩下。然 而月亮也暗暗地躲到东边去了。而一无所有的干子，却仍然默默地铁似的直刺着奇怪而高的天空，一意要制他的死命，不管他各式各样地着许多蛊惑的眼睛。 哇的一声，夜游的恶鸟飞过了。 我忽而听到夜半的笑声，吃吃地，似乎不愿意惊动睡着的人，然而四围的空气都应和着 笑。夜半，没有别的人，我即刻听出这声音就在我嘴里，我也即刻被这笑声所驱逐，回进自己的房。灯火的带子也即刻被我旋高了。 后窗的玻璃上丁丁地响，还有许多小飞虫乱撞。不多久，几个进来了，许是从窗纸的破 孔进来的。他们一进来，又在玻璃的灯罩上撞得丁丁地响。一个从上面撞进去了，他于是遇到火，而且我以为这火是真的。两三个却休息在灯的纸罩上喘气。那罩是昨晚新换的罩，雪白的纸，折出波浪纹的叠痕，一角还画出一枝猩红色的栀子〔２〕。 猩红的栀子开花时，枣树又要做小粉红花的梦，青葱地弯成弧形了……。我又听到夜半 的笑声；我赶紧砍断我的心绪，看那老在白纸罩上的小青虫，头大尾小，向日葵子似的，只有半粒小麦那么大，遍身的颜色苍翠得可爱，可怜。我打一个呵欠，点起一支纸烟，喷出烟来，对着灯默默地敬奠这些苍翠精致的英雄们。 一九二四年九月十五日。");
    //console.log(ar.join(","));
}

function mmsegGroup() {
    var start = new Date().getTime();
    for (var i = 0; i < rounds; i++) {
        runmmseg();
    }
    var end = new Date().getTime();
    console.log(810 * rounds * 1000 / (end - start));
}

//runmmseg();

mmsegGroup();

*/

var fs = require('fs');
var nseg = require('nseg').evented({});

var start = new Date().getTime();

function callback(result) {
    if (counter <= 0) {
        var end = new Date().getTime();
        console.log(778 * (rounds - counter) * 1000 / (end - start));
    } else {
        counter--;
        process.nextTick(runnseg);
    }
}

function runnseg() {
    var strmOut = fs.createWriteStream('segments.txt', {flags: 'w+', encoding: 'utf-8'}),
        strmIn  = fs.createReadStream('qiuye.txt');

    var pipe = nseg(strmIn, strmOut);
    pipe.on('error', function (err) {
        console.log('error', err);
    });
    pipe.on('end', callback);
    pipe.start();
}

function nsegGroup() {
    runnseg();
}

//runnseg();

nsegGroup();
