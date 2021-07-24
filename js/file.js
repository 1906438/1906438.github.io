function answer(words){
    var message ="";

    if (words==1) {
        message="富士山";
    } else if (words==2) {
        message="「答え：奈良県」　ちなみに、奈良県の世界遺産数は3件。2位は岩手県、東京都、静岡県、広島県、福岡県、長崎県、熊本県、鹿児島県で2件。";     
    } else if (words==3) {
        message="残念！！！　ブータンは登録されている世界遺産はありません...。";
    } else if (words==4) {
        message="正解！！！　中国と並んで、登録されている世界遺産は55件あります。";
    } else if (words==5) {
        message="残念！！！　美しい景観はたくさんありますが、24件で10位です...。";
    } else if (words==6) {
        message="残念！！！　日本は23件で12位です...。";
    } else if (words==7){
        message="不正解！"
    } else if (words==8){
        message="正解！1972年に世界遺産条約が採択されましたが、世界で最初の世界遺産が誕生したのは1978年。イエローストーン国立公園』と、アメリカ先住民の住居の『メサ・ヴェルデ国立公園』を世界で最初に世界遺産登録された。"
    } else if (words==9){
        message="不正解！"
    } else if (words==10){
        message="不正解！"
    }
    alert(message);

}