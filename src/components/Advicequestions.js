import React from 'react'
import Advicenav from './Advicenav';
import './Advicequestions.css'

function Advicequestions() {
  return (
    <div>
      <h2>KKK - Korduma kippuvad küsimused</h2>
        <div className='questions-container'>
            <div className='question'>
              <h4>Kui tihti peaksin oma lemmikule ussirohtu andma?</h4>
            </div>
            <div className='answer'>
              <p>Täiskasvanud kassidele ja koertele võiks ussirohukuuri teha ca. 3-4 kuu tagant. Kui väljaheites on juba usse/ussimune märgata, peaks kuuri 10 päeva pärast kordama.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Miks soovitatakse enne vaktsineerimist ussirohtu anda?</h4>
            </div>
            <div className='answer'>
              <p>Ussirohu andmine on vajalik selleks, et looma organismis esinevad siseparasiidid hävitada. See aga on tarvilik täisväärtusliku immuunsuse tekkeks organismis pärast vaktsineerimist.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Mitu päeva enne vaktsineerimist tuleks kassile/koerale ussirohtu anda?</h4>
            </div>
            <div className='answer'>
              <p>7-10 päeva, kuid viimasest ussitõrjest ei tohiks olla möödas rohkem kui 1 kuu.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Plaanin koeraga reisida Soome. Millal peaksin tulema kliinikusse, et europassi ussirohu manustamise tõend saada?</h4>
            </div>
            <div className='answer'>
              <p>Minimaalselt 24 tundi ja maksimaalselt 5 päeva enne reisi väljumist.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Kuidas saaksin infot lemmikloomaga reisimise kohta?</h4>
            </div>
            <div className='answer'>
              <p>Kõige ajakohasemat infot iga riigi kohta on võimalik saada Harjumaa Veterinaarkeskusest, tel. nr: 6580420 või 6580433.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Kui tihti peaksin oma lemmikut vaktsineerima?</h4>
            </div>
            <div className='answer'>
              <p>Kasse ja koeri tuleks iga-aastaselt vaktsineerida viiruste vastu. Marutaudi vastu vaktsineerimine on Eestis kohustuslik ning seda tehakse iga kahe aasta tagant. Küülikuid vaktsineeritakse samuti igal aastal. Kui Teil on olemas vaktsineerimistunnistus/pass, kuhu varasemalt on kantud looma vaktsineerimised, saate „kehtib kuni“ kuupäeva järgi järgmist vaktsineerimisaega planeerida.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Soovin tulla oma kassil/koeral/küülikul küüsi lõikama, kas selleks peab visiidi registreerima?</h4>
            </div>
            <div className='answer'>
              <p>Üldiselt mitte, küüntelõikus toimub elavas järjekorras.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Mille poolest erinevad lemmikloomatoidud, mis on kliinikus müügil nendest, mis on müügil tavapoodides?</h4>
            </div>
            <div className='answer'>
              <p>Kõige lihtsam vastus võiks olla see, et toidupoodides müüdavad lemmikloomatoidud (Whiskas, Chappi, Kitekat, Friskies…):

              ei sisalda lemmikule vajalikke vitamiine ja muid kasulikke aineid, mis on vajalikud tasakaalustatud toitumiseks
              sisaldavad suures koguses ebavajalikke ja isegi kahjulikke lisaaineid nagu liigne toortuhk, toiduvärvid, geneetiliselt modifitseeritud mais, liigne sool ja suhkur jne.
              võivad suure tõenäosusega tekitada põie- või neeruprobleeme jne.
              Kliinikutoidud sisaldavad rohkem liha ning on rikkad vitamiinide ja mineraalide poolest ning vastavalt loomaliigile, tõule, kaalule, terviseprobleemidele/seisunditele sisaldavad õigetes vahemikes toitaineid. Veidi kallima hinna kasuks räägib ka see, et paljudele kliinikutoitudele teostatakse pidevalt teste ja uuringuid, et tagada parim kvaliteet ja mõju.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Kuidas saan registreerida oma vastkiibistatud lemmiklooma tasuta registrisse?</h4>
            </div>
            <div className='answer'>
              <p>Selleks võite sisestada www.eesti.ee  üldotsingusse sõna “lemmikloomaregister” ja vajutada lingil “Lemmiklooma andmed ja registreerimine LLR”. Leheküljele saab siseneda nii ID-kaardi, mobiil-ID, kui internetipanga abil. Peale sisselogimist vajutage lingil “registreeri uus kiibistatud loom” ja sisestage kiibinumber. Vajutage lingil “Alusta kiibistatud looma registreerimist”. Seejärel tuleb täita ankeet, mis tuleb ka salvestada. (NB! Registreerimise ajal peavad veebilehitsejas olema hüpikaknad lubatud.)</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Miks tuleks oma kass/koer ära steriliseerida/kastreerida?</h4>
            </div>
            <div className='answer'>
              <p>Steriliseerimata kass võib aasta jooksul ilmale tuua kuni neli pesakonda, mis teeb kokku umbes 20 järglast. Koerad võivad samuti aastas mitu korda poegida ning ühes pesakonnas võib olla isegi 15 kutsikat. Loomaomaniku kohustus on tagada oma lemmiku soovimatute järglaste saamise ärahoidmine, mis on ka kõige tõhusam viis tänavatel hulkuvate loomade arvu kontrolli all hoida. Steriliseeritud või kastreeritud loomad muutuvad rahulikumaks, ei märgista, hoiavad kodu ning püsivad oma territooriumil. Seega on operatsioonist kasu mitmele osapoolele – nii Teie naabrile, Teile, elukeskkonnale, teistele loomaomanikele jne. Hüvasti, unetud ööd ja lõhutud mööbel!</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Kas Tatari loomakliiniku läheduses on parkimisvõimalus?</h4>
            </div>
            <div className='answer'>
              <p>Parkida on võimalik meie hoovi (1 koht), tõkkepuu saame avada Teie kõne peale.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Ostsin oma 52- kilosele koerale turjatilgad (kirpude, puukide või usside tõrjeks). Pakil on kaaluvahemikuna välja toodud 40-60 kg. Kas peaksin kogu ampulli sisu ära kasutama, või võin seda jagada ka oma väiksema koeraga?</h4>
            </div>
            <div className='answer'>
              <p>Koerale (kassile), kes kuulub vastavasse kaaluvahemikku, tuleb turjale panna kogu ampulli sisu. Vastasel korral ei pruugi toode oma täielikku efektiivsust saavutada.</p>
            </div>
        </div>
        <div className='questions-container'>
            <div className='question'>
              <h4>Kui tihti peaksin oma lemmikule tegema kirbu- ja puugitõrjet?</h4>
            </div>
            <div className='answer'>
              <p>Hiliskevadest varasügiseni, ehk kõrghooajal võiks tõrjet teha igal kuul. Selleks on müügil spetsiaalsed turjatilgad, mille üks ampull toimib ühe kuu vältel.</p>
            </div>
        </div>
      </div>
    
  )
}

export default Advicequestions