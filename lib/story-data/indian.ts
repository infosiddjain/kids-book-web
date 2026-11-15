// Traditional Indian tales (public domain), retold in our own words.
import { story } from "../story-types";

const P = "Panchatantra";
const J = "Jataka Tales";
const H = "Hitopadesha";
const AB = "Akbar and Birbal";
const T = "Tenali Raman";

export const indianTales = [
  story("lion-and-clever-rabbit", P, ["The Lion and the Clever Rabbit", "शेर और चतुर खरगोश"], ["Brains are stronger than muscles.", "बुद्धि बल से बड़ी होती है।"], [
    [`A greedy lion hunted too many animals in the forest. So the animals agreed to send him one animal each day.`, `जंगल में एक लालची शेर बहुत सारे जानवरों का शिकार करता था। इसलिए जानवरों ने तय किया कि रोज़ एक जानवर उसके पास जाएगा।`],
    [`One day it was a little rabbit's turn. He walked slowly and reached the lion very late. "Why are you late?" roared the lion.`, `एक दिन छोटे खरगोश की बारी आई। वह धीरे-धीरे चलकर बहुत देर से पहुँचा। शेर दहाड़ा, "इतनी देर क्यों हुई?"`],
    [`"Another lion stopped me on the way," said the rabbit. "He says he is the king of this forest!"`, `खरगोश बोला, "रास्ते में एक दूसरे शेर ने मुझे रोक लिया। वह कहता है कि इस जंगल का राजा वही है!"`],
    [`Angry, the lion followed the rabbit to a deep well. He looked in and saw his own reflection. Thinking it was the other lion, he jumped in, and the forest was safe again.`, `ग़ुस्से में शेर खरगोश के पीछे एक गहरे कुएँ तक गया। उसने अंदर झाँका और अपनी परछाई देखी। उसे दूसरा शेर समझकर वह कुएँ में कूद गया, और जंगल फिर से सुरक्षित हो गया।`],
  ]),
  story("blue-jackal", P, ["The Blue Jackal", "रंगा सियार"], ["Be true to who you are.", "जो हो, वही बनकर रहो।"], [
    [`A jackal ran into a village and fell into a tub of blue dye. When he came out, he was bright blue!`, `एक सियार गाँव में भागते हुए नील के एक टब में गिर गया। जब वह बाहर निकला, तो पूरा नीला हो गया था!`],
    [`The forest animals had never seen a blue animal. "Who are you?" they asked in fear.`, `जंगल के जानवरों ने कभी नीला जानवर नहीं देखा था। उन्होंने डरते हुए पूछा, "तुम कौन हो?"`],
    [`"I am your new king, sent from the sky," said the jackal. The animals believed him and gave him the best food.`, `सियार बोला, "मैं तुम्हारा नया राजा हूँ, मुझे आसमान से भेजा गया है।" जानवरों ने उसकी बात मान ली और उसे सबसे अच्छा खाना दिया।`],
    [`One night, other jackals howled at the moon. The blue jackal could not stop himself and howled too. "He is just a jackal!" said the animals, and they chased him away.`, `एक रात दूसरे सियार चाँद को देखकर हुआँ-हुआँ करने लगे। नीला सियार भी ख़ुद को रोक न सका और हुआँ-हुआँ करने लगा। जानवर बोले, "यह तो बस एक सियार है!" और उन्होंने उसे भगा दिया।`],
  ]),
  story("talkative-tortoise", P, ["The Talkative Tortoise", "बातूनी कछुआ"], ["Think before you speak.", "बोलने से पहले सोचो।"], [
    [`A tortoise lived in a lake with two swan friends. One summer, the lake began to dry up.`, `एक तालाब में एक कछुआ अपने दो हंस दोस्तों के साथ रहता था। एक गर्मी में तालाब सूखने लगा।`],
    [`"We will fly to a new lake," said the swans. "Hold this stick in your mouth, and we will carry it. But do not talk!"`, `हंसों ने कहा, "हम एक नए तालाब पर उड़ चलेंगे। तुम इस डंडी को मुँह से पकड़ लो, हम उसे उठा लेंगे। पर बोलना मत!"`],
    [`High in the sky, people below pointed and laughed. "Look! A flying tortoise!"`, `ऊपर आसमान में उड़ते हुए उन्हें देखकर नीचे लोग हँसने लगे, "देखो! उड़ता हुआ कछुआ!"`],
    [`The tortoise wanted to answer them. He opened his mouth to speak, and down he fell into a bush. Luckily he was not hurt, but he learned his lesson.`, `कछुए से रहा न गया। उसने जवाब देने के लिए मुँह खोला और नीचे एक झाड़ी में गिर पड़ा। किस्मत से उसे चोट नहीं लगी, पर उसे सबक मिल गया।`],
  ]),
  story("crows-and-snake", P, ["The Crows and the Snake", "कौए और साँप"], ["Cleverness can defeat a stronger enemy.", "चतुराई से ताक़तवर दुश्मन को भी हराया जा सकता है।"], [
    [`Two crows had a nest in a tall tree. A wicked snake lived in a hole at the bottom and ate their eggs.`, `दो कौओं का एक ऊँचे पेड़ पर घोंसला था। पेड़ के नीचे बिल में एक दुष्ट साँप रहता था जो उनके अंडे खा जाता था।`],
    [`The crows went to a wise fox for help. "Bring something shiny to the snake's hole," said the fox.`, `कौए मदद के लिए एक समझदार लोमड़ी के पास गए। लोमड़ी ने कहा, "कोई चमकीली चीज़ साँप के बिल तक ले आओ।"`],
    [`The crow flew to the river where a princess was bathing. He picked up her gold necklace and flew slowly so the guards could follow.`, `कौआ उस नदी पर गया जहाँ एक राजकुमारी नहा रही थी। उसने उसका सोने का हार उठाया और धीरे-धीरे उड़ा, ताकि सिपाही उसका पीछा कर सकें।`],
    [`He dropped the necklace into the snake's hole. The guards dug it up, found the snake and chased it far away. The crows lived happily ever after.`, `उसने हार साँप के बिल में गिरा दिया। सिपाहियों ने बिल खोदा, साँप को देखा और उसे दूर भगा दिया। कौए फिर खुशी से रहने लगे।`],
  ]),
  story("monkey-and-wedge", P, ["The Monkey and the Wedge", "बंदर और कील"], ["Do not meddle with things you do not understand.", "जिस काम की समझ न हो, उसमें दख़ल मत दो।"], [
    [`Some workers were cutting a big log of wood. At lunchtime, they left a wooden wedge in the half-cut log.`, `कुछ मज़दूर लकड़ी का एक बड़ा लट्ठा चीर रहे थे। दोपहर के खाने के समय वे आधे कटे लट्ठे में एक लकड़ी की कील छोड़ गए।`],
    [`A group of monkeys came to play. One curious monkey sat on the log and looked at the wedge.`, `बंदरों का एक झुंड खेलने आया। एक शरारती बंदर लट्ठे पर बैठकर कील को देखने लगा।`],
    [`"What is this?" he wondered. He pulled and pulled at the wedge until it came out.`, `उसने सोचा, "यह क्या है?" वह कील को खींचता रहा, जब तक वह बाहर नहीं निकल आई।`],
    [`Snap! The two halves of the log closed together and caught his tail. "Ouch! Ouch!" he cried. The other monkeys helped him out, and he never touched strange things again.`, `चटाक! लट्ठे के दोनों हिस्से आपस में जुड़ गए और उसकी पूँछ फँस गई। वह चिल्लाया, "उई! उई!" बाक़ी बंदरों ने उसे निकाला, और उसने फिर कभी अनजानी चीज़ों को नहीं छुआ।`],
  ]),
  story("four-friends", P, ["The Four Friends", "चार दोस्त"], ["Good friends work together to solve problems.", "अच्छे दोस्त मिलकर हर मुश्किल हल करते हैं।"], [
    [`A crow, a mouse, a tortoise and a deer were best friends. They lived together near a lake.`, `एक कौआ, एक चूहा, एक कछुआ और एक हिरन पक्के दोस्त थे। वे एक झील के पास साथ रहते थे।`],
    [`One day, the deer was caught in a hunter's net. The crow flew to tell the others.`, `एक दिन हिरन शिकारी के जाल में फँस गया। कौआ उड़कर बाक़ी दोस्तों को बताने गया।`],
    [`The mouse ran and nibbled the net until the deer was free. But the slow tortoise was caught by the hunter!`, `चूहे ने दौड़कर जाल कुतर दिया और हिरन आज़ाद हो गया। पर धीमे कछुए को शिकारी ने पकड़ लिया!`],
    [`The deer lay down near the river, pretending to be hurt. The hunter put down the tortoise to catch the deer. The mouse freed the tortoise, the deer ran off, and all four friends escaped together.`, `हिरन नदी के पास ऐसे लेट गया जैसे घायल हो। शिकारी कछुए को नीचे रखकर हिरन को पकड़ने दौड़ा। चूहे ने कछुए को छुड़ा लिया, हिरन भाग गया, और चारों दोस्त बच निकले।`],
  ]),
  story("elephants-and-mice", P, ["The Elephants and the Mice", "हाथी और चूहे"], ["Even the smallest friend can help in a big way.", "छोटे से छोटा दोस्त भी बड़ी मदद कर सकता है।"], [
    [`Many mice lived in an old town. A herd of elephants walked through it every day to reach a lake, and stepped on the mouse homes.`, `एक पुराने शहर में बहुत सारे चूहे रहते थे। हाथियों का एक झुंड रोज़ झील तक जाते हुए वहीं से गुज़रता था और चूहों के घर कुचल देता था।`],
    [`The mouse king went to the elephant king. "Please take another path," he said. "One day, we may help you too."`, `चूहों का राजा हाथियों के राजा के पास गया और बोला, "कृपया दूसरा रास्ता ले लीजिए। एक दिन हम भी आपकी मदद कर सकते हैं।"`],
    [`The elephant king smiled and agreed. Some time later, hunters trapped the elephants in strong nets.`, `हाथियों का राजा मुस्कुराया और मान गया। कुछ समय बाद शिकारियों ने हाथियों को मज़बूत जालों में फँसा लिया।`],
    [`The elephant king sent a message to the mice. Hundreds of mice came and chewed the nets. Soon all the elephants were free!`, `हाथियों के राजा ने चूहों को संदेश भेजा। सैकड़ों चूहे आए और जाल कुतर डाले। जल्दी ही सारे हाथी आज़ाद हो गए!`],
  ]),
  story("singing-donkey", P, ["The Singing Donkey", "गाने वाला गधा"], ["Know the right time to do things.", "हर काम का एक सही समय होता है।"], [
    [`A donkey and a jackal were friends. At night, they went into a farmer's field to eat sweet cucumbers.`, `एक गधा और एक सियार दोस्त थे। रात को वे एक किसान के खेत में मीठी ककड़ियाँ खाने जाते थे।`],
    [`One moonlit night, the donkey felt very happy. "I want to sing a song!" he said.`, `एक चाँदनी रात गधा बहुत खुश था। उसने कहा, "मैं एक गाना गाना चाहता हूँ!"`],
    [`"Please don't," said the jackal. "The farmer will wake up." But the donkey did not listen. "Hee-haw! Hee-haw!" he sang loudly.`, `सियार बोला, "ऐसा मत करो, किसान जाग जाएगा।" पर गधे ने नहीं सुना और ज़ोर से गाने लगा, "ढेंचू! ढेंचू!"`],
    [`The jackal ran away quickly. The farmer woke up and chased the donkey out of the field with a big stick.`, `सियार झट से भाग गया। किसान जाग गया और डंडा लेकर गधे को खेत से भगा दिया।`],
  ]),
  story("quarrelling-quails", J, ["The Quarrelling Quails", "झगड़ालू बटेर"], ["United we stand, divided we fall.", "मिलकर रहोगे तो बचोगे, बिखरोगे तो हारोगे।"], [
    [`Many quails lived in a forest. A hunter often threw his net over them.`, `एक जंगल में बहुत सारे बटेर रहते थे। एक शिकारी अक्सर उन पर जाल फेंकता था।`],
    [`Their wise leader said, "When the net falls, let us all fly up together, at the same time."`, `उनके समझदार मुखिया ने कहा, "जब जाल गिरे, तो हम सब एक साथ ऊपर उड़ेंगे।"`],
    [`It worked! They lifted the net together, flew away and dropped it on a thorny bush. The hunter went home empty-handed.`, `यह उपाय काम कर गया! वे जाल को साथ उठाकर उड़ गए और उसे एक काँटेदार झाड़ी पर गिरा दिया। शिकारी ख़ाली हाथ लौट गया।`],
    [`But one day, two quails started to quarrel. "You lift!" "No, you lift!" While they argued, the hunter caught them. The leader took the others to a new forest and taught them never to fight.`, `पर एक दिन दो बटेर झगड़ने लगे। "तुम उठाओ!" "नहीं, तुम उठाओ!" उनके झगड़ते-झगड़ते शिकारी ने उन्हें पकड़ लिया। मुखिया बाक़ी बटेरों को नए जंगल ले गया और सिखाया कि कभी आपस में मत लड़ना।`],
  ]),
  story("hare-in-the-moon", J, ["The Hare in the Moon", "चाँद पर खरगोश"], ["Giving with a kind heart is the greatest gift.", "सच्चे दिल से दिया गया दान सबसे बड़ा होता है।"], [
    [`A kind hare lived with his friends: a monkey, a jackal and an otter.`, `एक दयालु खरगोश अपने दोस्तों, बंदर, सियार और ऊदबिलाव के साथ रहता था।`],
    [`One day, a tired old man came to them. "I am so hungry," he said. The monkey brought fruit, the otter brought fish, and the jackal brought milk.`, `एक दिन एक थका हुआ बूढ़ा आदमी उनके पास आया और बोला, "मुझे बहुत भूख लगी है।" बंदर फल लाया, ऊदबिलाव मछली लाया, और सियार दूध लाया।`],
    [`The little hare had only grass. "I have nothing else," he said, "but I will give you everything I have."`, `छोटे खरगोश के पास सिर्फ़ घास थी। उसने कहा, "मेरे पास और कुछ नहीं है, पर मैं आपको अपना सब कुछ दे दूँगा।"`],
    [`The old man smiled and turned into a shining god. "Your heart is so kind," he said. He drew the hare on the moon so everyone would remember him. Look at the full moon, and you may see him too!`, `बूढ़ा मुस्कुराया और एक चमकते देवता में बदल गया। उसने कहा, "तुम्हारा दिल बहुत दयालु है।" उसने चाँद पर खरगोश की तस्वीर बना दी, ताकि सब उसे याद रखें। पूरे चाँद को देखो, शायद तुम्हें भी वह दिख जाए!`],
  ]),
  story("elephant-and-dog", J, ["The Elephant and the Dog", "हाथी और कुत्ता"], ["True friends make each other happy.", "सच्चे दोस्त एक-दूसरे की खुशी होते हैं।"], [
    [`A royal elephant lived in the king's stable. A thin little dog came every day to eat the rice that fell from the elephant's food.`, `राजा के हाथीखाने में एक शाही हाथी रहता था। एक दुबला-पतला कुत्ता रोज़ हाथी के खाने से गिरा चावल खाने आता था।`],
    [`Soon they became best friends. They ate together, played together and slept side by side.`, `जल्दी ही दोनों पक्के दोस्त बन गए। वे साथ खाते, साथ खेलते और पास-पास सोते।`],
    [`One day, a traveller took the dog away. The elephant became very sad. He would not eat or drink.`, `एक दिन एक मुसाफ़िर कुत्ते को अपने साथ ले गया। हाथी बहुत उदास हो गया। उसने खाना-पीना छोड़ दिया।`],
    [`The wise king learned about the friendship and asked his men to find the dog. When the dog came back, the elephant lifted him up with his trunk and trumpeted with joy!`, `समझदार राजा को उनकी दोस्ती का पता चला और उसने सिपाहियों से कुत्ते को ढूँढ़कर लाने को कहा। कुत्ते के लौटते ही हाथी ने उसे सूँड से उठा लिया और खुशी से चिंघाड़ उठा!`],
  ]),
  story("ox-who-won-the-bet", J, ["The Ox Who Won the Bet", "बैल जिसने शर्त जीती"], ["Kind words bring out the best in others.", "मीठे बोल सबका मन जीत लेते हैं।"], [
    [`A strong ox named Nandi loved his master, who was always kind to him.`, `नंदी नाम का एक ताक़तवर बैल अपने मालिक से बहुत प्यार करता था, क्योंकि मालिक उसके साथ हमेशा अच्छा व्यवहार करता था।`],
    [`"I can pull a hundred carts," Nandi told him. So the master made a bet with a rich man.`, `नंदी ने मालिक से कहा, "मैं सौ गाड़ियाँ खींच सकता हूँ।" इसलिए मालिक ने एक अमीर आदमी से शर्त लगा ली।`],
    [`On the big day, the master shouted rudely, "Pull, you lazy ox!" Nandi felt hurt and did not move. The master lost the bet.`, `उस दिन मालिक ने चिल्लाकर कहा, "खींच, आलसी बैल!" नंदी को बुरा लगा और वह हिला तक नहीं। मालिक शर्त हार गया।`],
    [`"Speak kindly to me, and I will try again," said Nandi. The next time, the master said gently, "Come, my dear Nandi, pull!" Nandi pulled all hundred carts, and they won!`, `नंदी ने कहा, "मुझसे प्यार से बात करो, मैं फिर कोशिश करूँगा।" अगली बार मालिक ने प्यार से कहा, "चलो मेरे प्यारे नंदी, खींचो!" नंदी ने सौ की सौ गाड़ियाँ खींच दीं, और वे जीत गए!`],
  ]),
  story("deer-crow-and-jackal", H, ["The Deer, the Crow and the Jackal", "हिरन, कौआ और सियार"], ["Choose your friends wisely.", "दोस्त सोच-समझकर बनाओ।"], [
    [`A deer and a crow were old friends. One day, a sly jackal came and said, "Deer, let me be your friend too."`, `एक हिरन और एक कौआ पुराने दोस्त थे। एक दिन एक चालाक सियार आया और बोला, "हिरन, मुझे भी अपना दोस्त बना लो।"`],
    [`The jackal led the deer to a farmer's field full of green crops. The deer ate happily every day, until he was caught in the farmer's trap.`, `सियार हिरन को हरी फसल वाले एक खेत में ले गया। हिरन रोज़ मज़े से खाता रहा, फिर एक दिन वह किसान के फंदे में फँस गया।`],
    [`"Help me, friend!" cried the deer. But the jackal just waited nearby. He hoped the farmer would catch the deer.`, `हिरन चिल्लाया, "दोस्त, मेरी मदद करो!" पर सियार पास में बैठा इंतज़ार करता रहा। वह चाहता था कि किसान हिरन को पकड़ ले।`],
    [`The crow had a plan. "Lie still, like you are asleep," he whispered. When the farmer opened the trap, the deer jumped up and ran far away with his true friend, the crow.`, `कौए ने एक उपाय सोचा। उसने धीरे से कहा, "ऐसे लेट जाओ जैसे सो रहे हो।" जैसे ही किसान ने फंदा खोला, हिरन उछलकर अपने सच्चे दोस्त कौए के साथ दूर भाग गया।`],
  ]),
  story("how-many-crows", AB, ["How Many Crows?", "कितने कौए?"], ["A quick mind can answer any riddle.", "तेज़ दिमाग़ हर पहेली का हल ढूँढ़ लेता है।"], [
    [`One day, Emperor Akbar asked Birbal a tricky question. "How many crows are there in our city?"`, `एक दिन बादशाह अकबर ने बीरबल से एक मुश्किल सवाल पूछा, "हमारे शहर में कितने कौए हैं?"`],
    [`Birbal thought for a moment and smiled. "There are exactly ninety-five thousand, four hundred and sixty-three crows, Your Majesty."`, `बीरबल ने एक पल सोचा और मुस्कुराकर कहा, "जहाँपनाह, ठीक पचानवे हज़ार चार सौ तिरसठ कौए हैं।"`],
    [`"What if there are more?" asked Akbar. "Then some crows have come to visit their relatives," said Birbal.`, `अकबर ने पूछा, "अगर इससे ज़्यादा हुए तो?" बीरबल बोले, "तो कुछ कौए अपने रिश्तेदारों से मिलने आए होंगे।"`],
    [`"And if there are fewer?" "Then some crows have gone to visit relatives in other towns!" Akbar laughed and laughed.`, `"और अगर कम हुए तो?" "तो कुछ कौए दूसरे शहरों में रिश्तेदारों से मिलने गए होंगे!" अकबर ठहाका मारकर हँस पड़े।`],
  ]),
  story("make-the-line-shorter", AB, ["Make the Line Shorter", "छोटी लकीर"], ["To be greater, improve yourself instead of pulling others down.", "आगे बढ़ना है तो ख़ुद को बेहतर बनाओ, दूसरों को नीचा मत दिखाओ।"], [
    [`One day, Akbar drew a line on the floor. "Make this line shorter," he told his courtiers, "but you must not touch it."`, `एक दिन अकबर ने ज़मीन पर एक लकीर खींची और दरबारियों से कहा, "इस लकीर को छोटा करो, पर इसे छूना मत।"`],
    [`The courtiers scratched their heads. "How can we make it shorter without touching it?" they whispered.`, `दरबारी सिर खुजाने लगे। वे फुसफुसाए, "बिना छुए इसे छोटा कैसे करें?"`],
    [`Then Birbal stepped forward. He took the chalk and drew a longer line right next to it.`, `तब बीरबल आगे आए। उन्होंने चॉक ली और उसके ठीक बगल में एक लंबी लकीर खींच दी।`],
    [`"Now your line is the shorter one, Your Majesty," said Birbal. Akbar was very pleased with his clever answer.`, `बीरबल बोले, "जहाँपनाह, अब आपकी लकीर छोटी हो गई।" अकबर उनके चतुर जवाब से बहुत खुश हुए।`],
  ]),
  story("birbals-khichdi", AB, ["Birbal's Khichdi", "बीरबल की खिचड़ी"], ["Being fair matters more than following rules.", "नियमों से ज़्यादा ज़रूरी है इंसाफ़।"], [
    [`A poor man stood in a cold lake all night to win a prize from Akbar. "I looked at a lamp far away and kept going," he said.`, `एक ग़रीब आदमी ने अकबर का इनाम जीतने के लिए पूरी रात ठंडे तालाब में खड़े होकर बिताई। उसने कहा, "मैं दूर एक दीया देखता रहा और हिम्मत बनाए रखी।"`],
    [`"The lamp kept you warm, so no prize!" said a courtier. Akbar agreed, and the poor man went home sad.`, `एक दरबारी बोला, "दीये ने तुम्हें गर्मी दी, इसलिए कोई इनाम नहीं!" अकबर मान गए, और ग़रीब आदमी उदास होकर घर चला गया।`],
    [`The next day, Birbal hung a pot of khichdi high on a tree and lit a small fire far below it. "I am cooking," he said.`, `अगले दिन बीरबल ने खिचड़ी की हांडी एक पेड़ पर ऊँची टाँग दी और बहुत नीचे एक छोटी-सी आग जला दी। उन्होंने कहा, "मैं खिचड़ी पका रहा हूँ।"`],
    [`"How can a fire so far away cook food?" laughed Akbar. Then he understood. "If this fire cannot cook, a far lamp cannot warm a man!" Akbar gave the poor man his prize.`, `अकबर हँसे, "इतनी दूर की आग से खाना कैसे पकेगा?" फिर उन्हें बात समझ आ गई, "अगर यह आग खिचड़ी नहीं पका सकती, तो दूर का दीया किसी को गर्मी कैसे देगा!" अकबर ने ग़रीब आदमी को उसका इनाम दे दिया।`],
  ]),
  story("most-beautiful-child", AB, ["The Most Beautiful Child", "सबसे सुंदर बच्चा"], ["To a mother, her own child is the most beautiful in the world.", "माँ के लिए उसका बच्चा दुनिया में सबसे सुंदर होता है।"], [
    [`One day, Akbar said to Birbal, "Bring me the most beautiful child in the city."`, `एक दिन अकबर ने बीरबल से कहा, "शहर का सबसे सुंदर बच्चा मेरे पास लाओ।"`],
    [`Birbal walked all over the city. He saw many children playing, laughing and running.`, `बीरबल पूरे शहर में घूमे। उन्होंने बहुत से बच्चों को खेलते, हँसते और दौड़ते देखा।`],
    [`The next day, he came back with a little boy with a runny nose and messy hair. "Who is this?" asked Akbar in surprise.`, `अगले दिन वह बिखरे बालों और बहती नाक वाले एक छोटे लड़के को लेकर आए। अकबर ने हैरानी से पूछा, "यह कौन है?"`],
    [`"I asked every mother," said Birbal, "and each one said her own child is the most beautiful. This boy's mother said so too!" Akbar smiled and agreed.`, `बीरबल बोले, "मैंने हर माँ से पूछा, और हर माँ ने कहा कि उसका बच्चा सबसे सुंदर है। इस लड़के की माँ ने भी यही कहा!" अकबर मुस्कुराए और मान गए।`],
  ]),
  story("tenali-and-the-thieves", T, ["Tenali and the Thieves", "तेनाली और चोर"], ["Clever thinking can turn trouble into help.", "चतुराई से मुसीबत को भी फ़ायदे में बदला जा सकता है।"], [
    [`One hot night, Tenali Raman saw two thieves hiding near his house.`, `एक गर्म रात तेनाली रामन ने अपने घर के पास दो चोरों को छिपे देखा।`],
    [`He said loudly to his wife, "Let us hide our gold in this box and drop it into the well!" Then they dropped a box full of stones.`, `उसने अपनी पत्नी से ज़ोर से कहा, "चलो, अपना सोना इस बक्से में रखकर कुएँ में डाल देते हैं!" फिर उन्होंने पत्थरों से भरा बक्सा कुएँ में डाल दिया।`],
    [`The thieves waited until everyone slept. Then they began pulling up bucket after bucket of water to find the box.`, `चोरों ने सबके सोने का इंतज़ार किया। फिर वे बक्सा ढूँढ़ने के लिए बाल्टी पर बाल्टी पानी निकालने लगे।`],
    [`They worked all night, and the water flowed into Tenali's dry garden. In the morning, Tenali said, "Thank you for watering my plants!" The thieves ran away.`, `वे रात भर पानी निकालते रहे और सारा पानी तेनाली के सूखे बगीचे में बह गया। सुबह तेनाली ने कहा, "मेरे पौधों को पानी देने के लिए धन्यवाद!" चोर भाग खड़े हुए।`],
  ]),
  story("pot-of-wisdom", T, ["The Pot of Wisdom", "बुद्धि का घड़ा"], ["Clever ideas can solve any puzzle.", "अच्छी सूझ-बूझ हर पहेली सुलझा देती है।"], [
    [`The king of a nearby land sent a message: "We hear your kingdom is very wise. Please send us a pot full of wisdom."`, `पड़ोसी राज्य के राजा ने संदेश भेजा, "सुना है तुम्हारा राज्य बहुत बुद्धिमान है। हमें बुद्धि से भरा एक घड़ा भेजो।"`],
    [`Everyone was puzzled. "How can we fill a pot with wisdom?" asked King Krishnadevaraya. Tenali smiled. "Give me a few weeks," he said.`, `सब परेशान हो गए। राजा कृष्णदेवराय ने पूछा, "घड़े में बुद्धि कैसे भरें?" तेनाली मुस्कुराया और बोला, "मुझे कुछ हफ़्ते दीजिए।"`],
    [`Tenali put a small pumpkin, still on its vine, inside a pot. He watered it every day until the pumpkin filled the whole pot.`, `तेनाली ने बेल पर लगे एक छोटे कद्दू को घड़े के अंदर रख दिया। वह रोज़ उसे पानी देता रहा, जब तक कद्दू ने पूरा घड़ा नहीं भर दिया।`],
    [`He sent the pot with a note: "Here is our wisdom. Please take it out without breaking the pot!" The other king laughed and sent back gifts of friendship.`, `उसने घड़े के साथ एक चिट्ठी भेजी, "यह रही हमारी बुद्धि। कृपया घड़ा तोड़े बिना इसे निकाल लीजिए!" दूसरे राजा ने हँसकर दोस्ती के तोहफ़े भेजे।`],
  ]),
];
