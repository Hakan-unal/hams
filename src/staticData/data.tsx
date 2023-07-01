import { GiLeo, GiVirgo, GiAries, GiSagittarius, GiTaurus, GiCapricorn, GiGemini, GiLibra, GiAquarius, GiCancer, GiScorpion, GiPisces } from "react-icons/gi";

const days = [
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
    { label: "12", value: 12 },
    { label: "13", value: 13 },
    { label: "14", value: 14 },
    { label: "15", value: 15 },
    { label: "16", value: 16 },
    { label: "17", value: 17 },
    { label: "18", value: 18 },
    { label: "19", value: 19 },
    { label: "20", value: 20 },
    { label: "21", value: 21 },
    { label: "22", value: 22 },
    { label: "23", value: 23 },
    { label: "24", value: 24 },
    { label: "25", value: 25 },
    { label: "26", value: 26 },
    { label: "27", value: 27 },
    { label: "28", value: 28 },
    { label: "29", value: 29 },
    { label: "30", value: 30 },
]

const months = [
    { label: "January", value: 1 },
    { label: "February", value: 2 },
    { label: "March", value: 3 },
    { label: "April", value: 4 },
    { label: "May", value: 5 },
    { label: "June", value: 6 },
    { label: "July", value: 7 },
    { label: "August", value: 8 },
    { label: "Septemper", value: 9 },
    { label: "October", value: 10 },
    { label: "November", value: 11 },
    { label: "December", value: 12 },
]

const horoscope = [
    { icon: <GiPisces size={100} />, title: "Pisces", description: "Canavar Typhon Olympos’a saldırdığında tanrılar ve tanrıçalar kendilerini birer hayvan biçimine sokarak kaçmaya çalışırken Aphrodite ile Eros da birer balığa dönüşerek suya dalmışlardı. Typhon yok edildikten sonra bedenlerine girdikleri balıkların anısına onları birbirlerine bağlı bir iple burçlar kuşağına koydular." },
    { icon: <GiAries size={100} />, title: "Aries", description: "Aries, altın tüylü postu uğruna Argo Denizcileri’nin tehlikeli bir yolculuğu göze aldıkları koçun ismidir.[1] Kişiliği bulutlarla simgeleşen göksel varlık Nephele, çocukları Phriksos ile Helle’yi üvey anneleri İno’nun kötülüklerinden kurtarmak için onlaraaltın tüylü ve kanatlı bir koç göndermişti. Çocuklar doğuya doğru yol alırken kız çocuk Helle denize düştü; düştüğü sular Helle’nin anısına Hellespontos (Helle Denizi) diye anıldı. Bu isim, Çanakkale Boğazı’nın antik ismidir (Modern dönemde Boğaz’a Troia kralı Dardanos’tan dolayı Dardanelles ismi verildi.) Koç’un yolculuğu Kolkhis’te son bulmuş ve Phriksos Koç’u Zeus’a sunu olarak kurban ettikten sonra altın tüylü postunu kendisini konuk eden kral Aietes’e hediye etmişti. Kral postu savaş tanrısı Ares’in onuruna donattırdığı bahçedeki bir ağaca astığından Koç’un ismi Aries’in Ares’den geldiği de söylenir.Antik Roma’da kalelerin ele geçirilmesi için yapılan savaşlarda kale kapılarını kırarak açmak için kullanılan, uçlarına koç başı biçimi verilen kütüklere Aries denilmiştir." },
    { icon: <GiTaurus size={100} />, title: "Taurus", description: " Prenses Europa’yı Fenike kıyılarından alıp Girit’e kaçıran Zeus’un Boğa’sının burçlar kuşağına yansıması Boğa burcudur. Bazı yazarlar bu burç için mitolojideki diğer bir boğayı, Girit Boğa’sını ileri sürer.[2] Poseidon’un kral Minos’a armağanı olan bu boğa, kraliçe Pasiphae’den Minotauros’un babası olan ve azgınlığından dolayı Herakles’in 7. görevinin konusu olduktan sonra Theseus tarafından öldürülen boğadır." },
    { icon: <GiGemini size={100} />, title: "Gemini", description: "Mitolojinin ünlü ikizleri, Dioskouroi (Tanrı’nın -Zeus’un- delikanlıları) diye anılan Kastor ve Polydeukes (Latin Pollux) Sparta kraliçesi Leda’nın, babaları farklı ikiz oğulları, Troia’ya kaçırılan Helene’nin kardeşleridir. Kastor’un babası kral Tyndareos, Polydeukes’in babası ise Zeus’tu. Biri ölümlü diğeri ölümsüz olan ikizler birbirlerine çok bağlıydılar. Kastor bir çatışmada öldüğünde ölümsüz Polydeukes ölen kardeşinden ayrı kalmaya dayanamamış kardeşiyle birlikte Hades’e inmek istemişti. Yunan mitolojisine göre Zeus önce birinin ölümsüzlüğünü diğeriyle paylaştırarak günlük yaşamlarını Hades ile Olympos arasında geçirmelerine izin vermiş, sonra da onları birbirlerinden hiç ayrılmasınlar diye burçlar kuşağında onurlandırmıştır." },
    { icon: <GiCancer size={100} />, title: "Cancer", description: "Yengeç burcunun ismi Yunanca ‘Karkinos’dan gelir. Karkinos’tu, Herkül 12 zorlu görevinden ikincisinde dokuz başlı canavar Hydra’yı öldürmeye çalışırken ayaklarını ısıran yengecin adıdır. O yengeci, Herakles’in dikkatini dağıtmak için Hera göndermiş ve Herakles’in ayakları altında ezilen Karkinos’un anısını canlı tutmak için ona burçlar kuşağında yer vermişti.Antikitenin ünlü doktoru Galenos’un tümörlerin üzerini kaplayan damarları yengeç ayaklarına benzettiği için karkinos sözcüğünü tıptaki anlamında (kanser) kullanmıştır." },
    { icon: <GiLeo size={100} />, title: "Leo", description: "Aslan burcunun simgesi Nemea Aslanı adlı yaratıktır. Herakles’e yüklenen 12 zorlu görevin ilki Nemea Aslanı’nı öldürmek ve derisini yüzmekti. Derisine ok, mızrak ve kılıç işlemediğinden aslanı boğarak öldürdükten sonra Herkül hayvanın kendi tırnaklarını kullanarak derisini yüzmüş, postundan giysi, başından da miğfer yapmıştı kendine." },
    { icon: <GiVirgo size={100} />, title: "Virgo", description: "Elinde bir başak demeti ile betimlenen bereket tanrıçası Demeter’in yanı sıra Batı dillerindeki anlamı dolayısıyla tanrıçalar Artemis ve Astraeia tanrıçaları ile, daha sonraki dönemlerde Romalı adalet tanrıçası İustitia ve Meryem ile ilişkilendirildi." },
    { icon: <GiLibra size={100} />, title: "Libra", description: "Bu burcun yıldızları burçlar kuşağının döngüsünde yarı yoldadır. Güneş bu takımyıldızdan geçerken gece ve gündüz eşit zamanlıdır, yani terazinin kefeleri aynı hizadadır. Denge ve eşitliği simgelediğinden adalet tanrıçaları Themis, Dike ve Astraeia’nın kişiliklerinde adaletin terazisi ile simgelenmiştir (Roma mitolojisinde Iustitia). Burçlar kuşağının tam ortasında olması da adalete verilen önemi vurgulamaktadır." },
    { icon: <GiScorpion size={100} />, title: "Scorpio", description: "Akrep burcu Orion takımyıldızıyla ilişkilidir. Efsaneye göre Orion, av tanrıçası Artemis’in hoşlandığı, erkek güzeli dev gibi bir avcıydı.[4] Yeryüzündeki bütün hayvanları öldürebilecek güç ve beceriye sahip olmakla böbürlenirdi. Buna öfkelenen Toprak Ana Gaia bağrından büyük bir akrep çıkarıp Orion’un üzerine salmıştır. Görevini yerine getirdiği için hoşnut kaldığı akrebi Gaia burçlar kuşağına koyarken Artemis de Orion’u koymuş yakınına. Orion’un sevgili köpeğinin ismini de Sirius yıldızına vermiş." },
    { icon: <GiSagittarius size={100} />, title: "Sagittarius", description: "Ok atan bir Kentavros (At Adam) simgesiyle tanınan yay burcu, kentavrosların en ünlüsü olan Kheiron’un anısını yaşatır. Kentavros, başı ve beline kadar olan gövdesi insan, belden aşağısı at olan mitolojik bir kişiliktir. Bu varlıkların en tanınmışı olan Kheiron Teselya bölgesinde Pelion Dağı’nın eteklerinde yaşardı. Türünün en iyisi ve en bilgesiydi, çünkü Apollo ile Artemis eğitmişti onu. Ok-yay kullanımında ustaydı. O da bilgi ve deneyimlerini ileride Troia savaşının kahramanı olacak Akhilleus (Aşil) ve Argonautika Seferi’ni yönetecek İason gibi gençlere aktarmıştı. Herakles’in yer aldığı bir çatışma sırasında bir rastlantı sonucu Herakles’in zehirli okuyla yaralanınca çektiği acıya dayanamayarak ölmek istemiş, ama ölümsüz olduğundan acısına son vermek uğruna ölümsüzlüğünden vazgeçerek Hades’e inmişti. Onun yeryüzünde bıraktığı ölümsüzlüğünü Zeus, Prometheus’a vermeyi uygun görmüştü." },
    { icon: <GiCapricorn size={100} />, title: "Capricorn", description: "Zeus kendisini emziren ve büyüten keçi veya keçi görünümlü orman nympha’sı Amalthea'yı, öldüğünde burçlar kuşağında onurlandırmıştı. Zeus’un doğumuyla ilgili söylenceye göre Zeus’un babası Kronos doğacak çocuklarından birinin kendini alaşağı ederek yerine geçeceği yolundaki kehaneti boşa çıkarmak için doğan çocuklarını yutuyordu. Zeus doğduğunda annesi Rhea (veya ninesi Gaia) onu saklayarak yerine bezlere sarılı bir taş yutturdu Kronos’a. Bebek Zeus’u Girit Adası’na kaçıran ninesi Gaia onu Amalthea’nın bakımına emanet etti. Onun sütüyle ve diğer orman nympha’larının getirdikleri balla beslenen Zeus ergenliğe ulaştıktan ve babasını devirip Olympos tahtına oturdu. Tahta oturduktan sonra Amalthea’yı unutmadı. Onun boynuzlarından birini kopararak içini sonsuz bollukla doldurdu. Boynuzu elinde tutanın yiyecek ve içecekten yana zengin olması dileğinde bulundu. Romalılar bu boynuza ‘Bolluk Boynuzu’ anlamında ‘Cornu copiae’ dediler. Amalthea Yunancada sevecen ve nazik anlamlarına geliyor. Zeus’un Latin adını alan Jupiter gezegeninin uydularından biri Amalthea’nın ismini taşır." },
    { icon: <GiAquarius size={100} />, title: "Aquarius", description: " Batı dillerinde ‘Su taşıyan’ diye anılan bu burcun ilişkilendirildiği mitolojik kişilik, Homeros’un “Ölümlülerin en güzeli’ diye andığı prens Ganymedes'tir. Yunan mitolojsinde Ganymedes Troia’nın kurucu kralı Tros’un oğluydu. Taşıdığı kaplarda su deği, Olymposluların ölümsüzlüklerini borçlu oldukları nektar vardı. Zeus onu kendine özel sâki yapmak için gözde hayvanı kartal aracılığıyla (veya bizzat kendini kartala dönüştürerek) onu Troia’dan kaçırmıştı." },
]

export { days, months, horoscope }