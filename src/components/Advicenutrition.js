import React from 'react';
import Advicenav from './Advicenav';
import './Advicenutrition.css'


function Advicenutrition() {
  return (
    <div>
        <Advicenav/>
        <h2>Toitmisest</h2>
        <div className='nutrition-wrapper'>
          <h4>KUIDAS VÕRRELDA KOERTE VALMISTOITE</h4>
          <p>Iga koerakasvataja ja koeraomanik on kogenud, mis tunne on silmitsi seista koeratoitude laia valikuga. Sobiva dieedi valimisest on saanud segadusse ajav protsess. Mis on parim minu koerale ja kuidas ma seda teada saaksin? Lemmikloomatoitude etiketid annavad paki sisu toitelise väärtuse kohta piiratud informatsiooni. Järgnev peaks aitama loomaomanikel hinnata loomade kommertstoite.
          <br/>
          Etiketi sisu lemmikloomatoitudel on erinevates maades pisut erinev. kuid EÜ maades on need küllaltki sarnased. Lemmikloomatoitude etiketid peaksid tavaliselt sisaldama järgmisi punkte:</p>
          <ul className='nutrition-list'>
            <li><span>toote kirjeldus (nimi, loomaliigid, toite-eesmärk, täistoit või toidulisand)</span></li>
            <li><span>keskmine toorproteiini, toorrasva, toortuha, toorkiu ja niiskuse sisaldus</span></li>
            <li><span>säilivusaja lõpuni garanteeritud mikroelementide (nagu näiteks vask) ja A-vitamiin, D3-vitamiin ning E-vitamiin sisaldus</span></li>
            <li><span>üksikute koostisosade või nende gruppide loetelu kaalu vähenemise järjekorras</span></li>
            <li><span>toitmisjuhend</span></li>
            <li><span>netokaal</span></li>
            <li><span>säilivusaeg (“Parim enne” kuupäev ja partii number)</span></li>
            <li><span>tootja või maaletooja aadress</span></li>
          </ul>
          <p>See on see, mis on seadusega määratud, aga see ei anna tarbijale küllaldast informatsiooni, et teha õige valik erineva valgu-, rasva- või niiskusesisaldusega toitude vahel. Sama seadus ei luba pakendil lisainformatsiooni energiasisalduse, seeduvuse või vajalike rasvahapete lõhustumise kohta. Süsivesikute mainimine etiketil on mittekohustuslik ja praktiliselt ei tehta seda kunagi. Kuid selle saab kergesti välja arvutada (vt. edaspidi).</p>
        </div>
        <div className='nutrition-wrapper'>
          <h4>ANALÜÜS</h4>
          <p>Keemiline analüüs näitab mitmete toitainete protsentuaalset sisaldust toidus. Protsendid on võrdelised grammidega 100 grammi toote kohta. 30 % valku tähendab, et 100 grammi toitu sisaldab 30 grammi valku. Keemiline analüüs näitab valgu kogust toidus, kuid ei ütle midagi selle kvaliteedi või seeduvuse kohta. Karvad ja nahk on samuti valgud, kuid seedumatud. Seepärast peab keemilist analüüsi kasutama koos koostisosade loeteluga, milles on ära nimetatud valguallikad.
          <br/>
          Uurides ja võrreldes lemmikloomatoitude analüüsinäite, tuleb kindlasti arvesse võtta toidu niiskuse- (vee-) sisaldust. Lemmikloomatoidud erinevad suuresti oma veesisalduse poolest. Kasside ja koerte kuivtoidud sisaldavad tavaliselt 6-14 % vett, aga mõned konservtoidud isegi kuni 70-80 % vett. Paikapidava toitainete võrdluse saamiseks on vajalik toitainete sisaldused konverteerida kuivaine alusel.</p>
          <ul className='nutrition-list'>
            <h5>Toitude võrdlus etiketi järgi (= nagu söödetakse)</h5>
            <li>Toit A (kuiv) Toit B (kuiv) Toit C (konserv)</li>
            <li>Valk 30 % 20 % 6 %</li>
            <li>Rasv 20 % 10 % 5 %</li>
            <li>Niiskus 8 % 8 % 80 %</li>
            <h5>Toitude võrdlus “kuivaine alusel”</h5>
            <li>Toit A (kuiv) Toit B (kuiv) Toit C (konserv)</li>
            <li>Valk 32.6 % 21.7 % 30 %</li>
            <li>Rasv 21.7 % 10.9 % 25 %</li>
            <li>Niiskus 0 % 0 % 0 %</li>
            <li>Valem: toitaine (näit. valgu) % jagada dieedi kuivainesisaldusega</li>
            <li>Kuivainesisaldus = 100 % – niiskuse %</li>
            <li>Toit A: (30 : 92) x 100 = 32.6 % valku kuivaines</li>
            <li>Toit C: ( 6 : 20) x 100 = 30 % valku kuivaines</li>
          </ul>
        </div>
        <div className='nutrition-wrapper'>
          <h4>KOOSTISOSADE LOETELU</h4>
          <p>Koostisosade loetelu on kokkuvõte tähtsamatest kasutatud toiduainetest. Tootjal on valida, kas deklareerida koostisained individuaalsete nimetuste all või grupeerida need kategooriate järgi. Kvaliteetsarjad valivad esimese meetodi. See annab tarbijale kõige detailsemat informatsiooni. Kui deklareerida koostisained üksikult, näiteks: kana, kanaliha jne., siis saab tarbija otsustada kasutatud valkude kvaliteedi üle. Teise meetodi korral võib etiketilt leida “liha ja loomsed produktid” ja see ei viita sellele, missugust osa loomast on kasutatud, millise kvaliteediga on valgud ning isegi seda, millise looma liha on kasutatud.
            <br/>
          Koostisained on loetletud pingerea alusel – esimesel kohal on need ained, mida on koguseliselt kõige rohkem, järgnevad ülejäänud koguse vähenemise järjekorras. Samuti näeb tarbija seda, kas proteiiniallikana on kasutatud teraviljavalke. Üldiselt on teraviljavalgud loomsetest valkudest madalama kvaliteediga nii nende aminohappelise koostise, söödavuse kui seeduvuse poolest. On tähtis, et koeratoitudes kasutatav valk oleks peaaegu eranditult loomse päritoluga. Koostisosade loetelu näitab ka seda, kas kasutatud õlid ja rasvad on taimse või loomse päritoluga. Kõik sarjad ei loetle rasvade allikat vaid märgivad tootelehele “õlid ja rasvad”. Enamgi veel mõned sarjad ei anna mingit infot toote valmistamisviisi kohta. Toiduvalmistamise tehnoloogia kvaliteet ja sanitaarsed standardid valmistamisprotsessi vältel on erinevate tootjate puhul erinevad. Ainsaks indikaatoriks on tootja reputatsioon ja paraku sedagi mitte alati.


          </p>
        </div>
        <div className='nutrition-wrapper'>
          <h4>ENERGIA</h4>
          <p>Energia või kalorid on lemmiklooma esmane vajadus. Kalorid on keha kütus. Toitmise eesmärk on tasakaalus hoida looma energiavajadus ja pakutav energiakogus. Kuna loomad söövad, et rahuldada oma kalorivajadust, ei söö nad protsente. Loom vajab täpselt ühepalju kaloreid ükskõik, kas ta sööb dieeti A, B või C. Koer peab koguseliselt rohkem sööma toitu, mis sisaldab vähem energiat 100 g kohta, kui toitu mille energiasisaldus on suurem. Seetõttu peab energiarikkama toidu pakk kauem vastu ja selle tulemusena on ka toidupäeva maksumus väiksem. Kahjuks ei luba seadus etiketil näidata energiasisaldust (kcal / kg metaboliseeruvat energiat). Selle informatsiooni leiab tootjate poolt välja antavatest brošüüridest või saab välja arvutada etiketil oleva info alusel (vt. edaspidi). Sissesöödava toidukoguse võrdlemine energia alusel on parim võimalus võrrelda omavahel erinevaid tooteid, eriti siis kui võrrelda konserv- ja kuivtoitu.
          <br/>
          Toote energiasisalduse saab välja arvutada etiketilt või määrata söötmiskatsetega loomadel. Toidu testimine söötmiskatsete seeriaga on kõige põhjalikum ja usaldusväärsem valikumeetod. Need andmed peegeldavad toidus sisalduvat tegelikku energiakogust, mida loom ära kasutab. Tarbija peaks olema teadlik sellest, et söötmiskatsete kasutamine pole vajalik, kui tootja kasutab “kalkuleerimismeetodit”. Tooteetiketilt ei saa mitte mingisugusel viisil teada, kas toitu on esitatud söötmiskatseteks või mitte, kui pakendil pole AAFCO (Association of American Feed Control Officials) või NRC (National Researche Council) märget. Tooted võivad olla, kas koostatud või testitud vastavalt AAFCO või NRC menetlustele ja soovitustele.
          </p>
          <ul className='nutrition-list'>
            <li>“koostatud”: lihtsalt rahuldab AAFCO või NRC poolt püstitatud nõuetele</li>
            <li>“testitud”: toode on läbinud AAFCO või NRC söötmiskatsed, kas täiskasvanud loomadel või teistes elujärkudes nagu tiinus, laktatsioon või kasvuperiood.</li>
          </ul>
          <p>Kõrgekvaliteediliste koostisainete puhul on söötmiskatsete korral mõõdetud metaboliseeruva energia väärtused suuremad, kui arvutuslikult saadud. Kalkulatsioonil on see puudus, et kasutatakse keskmisi väärtusi seeduvuse ja kvaliteedi kohta. Seetõttu “karistatakse” kvaliteetprodukte rohkem kui 15 %iga, sellal, kui halvakvaliteedilised toorained tulevad arvutustest välja liiga soodsalt.</p>
          <ul className='nutrition-list'>
            <h5>Juhtnöörina olgu toodud kerge viis arvutada metaboliseeruva energia (ME) sisaldust toidus etiketil oleva informatsiooni järgi:</h5>
            <li>100 % -(valgu % + rasva % + tuha % + kiu % + niiskuse %) = süsivesikute %</li>
            <li>1 g valku = 3.5 kcal ME</li>
            <li>1 g rasva = 8.5 kcal ME</li>
            <li>1 g süsivesikuid = 3.5 kcal ME</li>
            <h5>Näiteks toit A</h5>
            <li>30 % valke (= 30 g valku / 100 g toidus) x 3.5 = 105 kcal / 100 g</li>
            <li>20 % rasva (=”20″ g rasva / 100 g toidus) x 8.5 = 170 kcal / 100 g</li>
            <li>31 % süsivesikuid (=”31″ g süsivesikuid / 100 g toidus) x 3.5 = 108.5 kcal / 100 g</li>
            <li>Kokku: 383.5 kcal / 100 g (või 3835 kcal / kg)</li>
            
          </ul>
          <p>Et välja arvutada, kui palju vajab koer kindlat toitu päevas, tuleb esmalt välja arvutada päevane energiavajadus olenevalt koera kaalust ja aktiivsusest.</p>
          <p>Valem: ME vajadus = K x KM 0,67<br/>
          ME = metaboliseeruv energia<br/>
          K = konstant (vastavalt energiatasemele, mitteaktiivne: K = 132; aktiivne: K = 145; väga aktiine: K = 200; kelgukoerad: K = 300) <br/>
          KM = kehamass<br/>
          Näiteks vajab 4 – aastane, 15 kg raskune ja aktiivne koer 889 kcal / päevas. Ülal kalkuleeritud toitu (3835 kcal / kg) vajab ta 232 g päevas. Toitu, mis sisaldab 3335 kcal / kg, vajab ta 267 g päevas. Niisiis on ka valkude, rasvade ja süsivesikute sissevõetud hulk erinev ja seda saab sarnaselt ka välja arvutada.
          </p>
        </div>
        <div className='nutrition-wrapper'>
          <h4>SÖÖTMISJUHEND</h4>
          <p>Etiketid peavad sisaldama ka soovitatud toidukoguseid, mis on väljendatud kassile või koerale päevas söödetava toidukogusena. Selged ja detailsed söötmisjuhendid aitavad tarbijal ennetada segadusse ajavaid kalkulatsioone, mille tulemuseks võivad olla valed toidukogused. Kutsikate ja kassipoegade toidud peavad pakkuma eri toidunorme, olenevalt vanusest ja kaalust, kuna kasvu ajal on toitainete vajadus otsustava tähtsusega. Aga pidage meeles: toitmisjuhendid on üldised soovitused. Mõnikord on õige konditsiooni säilitamiseks vaja rohkem või hoopis vähem toitu, olenevalt looma aktiivsuse või väliskeskkonna muutustest.
            <br/>
          Kahjuks ei saa toitude kvaliteeti võrrelda lihtsalt pakendit lugedes. See vajab aega ja omaniku või kasvataja teadmisi ja isegi siis saab etiketilt piiratud informatsiooni. Kui te ei suuda ise jõuda mingisugusele järeldusele, palun küsige häbenemata oma loomaarstilt.


          </p>
        </div>
    </div>
  )
}

export default Advicenutrition