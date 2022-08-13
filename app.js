btn = document.querySelector("#answer_btn");
answer = document.querySelector("#answer");


three_eng = "Ace,Aid,Aim,Air,Ale,Arm,Art,Awl,Eel,Ear,Era,Ice,Ire,Ilk,Oar,Oak,Oat,Oil,Ore,Owl,Urn,Web,Cab,Dab,Jab,Lab,Tab,Dad,Fad,Lad,Mad,Bag,Gag,Hag,Lag,Mag,Rag,Tag,Pal,Cam,Dam,Fam,Ham,Jam,Ram,Ban,Can,Fan,Man,Pan,Tan,Bap,Cap,Lap,Pap,Rap,Sap,Tap,Yap,Bar,Car,Jar,Tar,War,Bat,Cat,Hat,Mat,Pat,Tat,Rat,Vat,Caw,Jaw,Law,Maw,Paw,Bay,Cay,Day,Hay,Ray,Pay,Way,Max,Sax,Tax,Pea,Sea,Tea,Bed,Med,Leg,Peg,Bee,Lee,Tee,Gem,Bet,Jet,Net,Pet,Set,Den,Hen,Men,Pen,Ten,Yen,Dew,Mew,Pew,Bib,Fib,Jib,Rib,Sib,Bid,Kid,Lid,Vid,Tie,Lie,Pie,Fig,Jig,Pig,Rig,Wig,Dim,Bin,Din,Fin,Gin,Pin,Sin,Tin,Win,Yin,Dip,Lip,Pip,Sip,Tip,Git,Hit,Kit,Pit,Wit,Bod,Cod,God,Mod,Pod,Rod,Doe,Foe,Hoe,Roe,Toe,Bog,Cog,Dog,Fog,Hog,Jog,Log,Poi,Con,Son,Ton,Zoo,Cop,Hop,Mop,Pop,Top,Bot,Cot,Dot,Lot,Pot,Tot,Bow,Cow,Sow,Row,Box,Lox,Pox,Boy,Soy,Toy,Cub,Nub,Pub,Sub,Tub,Bug,Hug,Jug,Mug,Rug,Tug,Bum,Gum,Hum,Rum,Tum,Bun,Gun,Pun,Run,Sun,Cup,Pup,Cut,Gut,Hut,Nut,Rut,Egg,Ego,Elf,Elm,Emu,End,Era,Eve,Eye,Ink,Inn,Ion,Ivy,Lye,Dye,Rye,Pus,Gym"

three_jap = "エース,援助,標的,空気,エール,腕,美術,千枚通し,うなぎ,耳,時代,氷,怒り,イルク,オール,オーク,エンバク,油,鉱石,フクロウ,壷,ウェブ,タクシー,軽くたたく,ジャブ,研究室,タブ,お父さん,流行,若者,狂った,バッグ,ギャグ,ハグ,遅れ,マグ,ラグ,鬼ごっこ,パル,カム,ダム,ファム,ハム,混雑する,RAM,禁止,できる,ファン,おとこ,パン,タン,バップ,キャップ,ラップ,パップ,ラップ,樹液,タップ,ヤップ,バー,車,ジャー,タール,戦争,バット,ネコ,帽子,マット,パット,タット,ねずみ,バット,カウ,あご,法,モー,足,ベイ,ケイ,日,干し草,レイ,支払い,仕方,マックス,サックス,税,エンドウ,海,お茶,ベッド,中,足,ペグ,蜂,リー,ティー,宝石,ベット,ジェット,ネット,ペット,設定,デン,めんどり,男性,ペン,十,円,露,ミュウ,ピュー,よだれかけ,フィブ,ジブ,リブ,シブ,入札,子供,蓋,ビデオ,ネクタイ,嘘,パイ,図,治具,豚,操作,かつら,暗い,置き場,ディン,フィン,ジン,ピン,罪,錫,勝つ,陰,浸漬,リップ,ピップ,一口,ヒント,ギット,打つ,キット,ピット,機転,ボッド,タラ,神,モッド,ポッド,ロッド,ドウ,敵,鍬,卵,つま先,ボグ,コグ,犬,霧,豚,ジョグ,ログ,ポイ,コン,息子,トン,動物園,警官,ホップ,モップ,ポップ,上,ボット,ベビーベッド,ドット,多く,ポット,トット,弓,牛,雌豚,行,箱,液体酸素,ポックス,男の子,大豆,おもちゃ,カブ,こぶ,パブ,サブ,たらい,バグ,抱擁,水差し,マグ,ラグ,タグボート,バム,ガム,ハム,ラム酒,タム,パン,銃,駄洒落,走る,太陽,カップ,子犬,切る,腸,小屋,ナット,轍,卵,自我,妖精,エルム,えむ,終わり,時代,イブ,目,インク,宿,イオン,アイビー,灰汁,染料,ライ麦,膿,ジム"


const Selection = {
    Three: 0,
    Four: 1,
    Five: 2,
    Six: 3,
    Verb: 4,
    Noun_Pronoun: 5,
    ThreeFour: 6,
    FiveSix: 7,
    Kindergarten: 8,
    Elementary: 9,
    Highschool: 10,
    College: 11,
}

english_words = [
]

japanese_words = [
]


english = document.querySelector("#english");
japanese = document.querySelector("#japanese");

index = 0;


btn.addEventListener('click', check);
answer.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        check();
    }
});

function check() {
    if (answer.value.toLowerCase() == english_words[index].toLowerCase()) {
        console.log("Correct")
    }else{
        console.log("Wrong")
        alert("Wrong answer")
    }
    console.log(index)
    index = Math.floor(Math.random() * english_words.length);
    english.innerHTML = english_words[index]
    japanese.innerHTML = japanese_words[index]
    answer.value = ""
}


function select(num) {
    if (num == Selection.Three) {
        english_words = three_eng.toLowerCase().split(",")
        japanese_words = three_jap.toLowerCase().split(",")
        index = Math.floor(Math.random() * english_words.length);
        
    english.innerHTML = english_words[index]
    japanese.innerHTML = japanese_words[index]
    answer.value = ""
    }
}