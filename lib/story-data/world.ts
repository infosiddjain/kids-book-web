// Fairy tales and folk tales from around the world (public domain), retold in our own words.
import { story } from "../story-types";

const G = "Brothers Grimm";
const HCA = "Hans Christian Andersen";
const F = "Folk Tales";

export const worldTales = [
  story("elves-and-shoemaker", G, ["The Elves and the Shoemaker", "मोची और बौने"], ["Kindness is always returned.", "भलाई का फल हमेशा मीठा होता है।"], [
    [`A poor shoemaker had leather for only one pair of shoes. He cut it out and went to bed.`, `एक ग़रीब मोची के पास सिर्फ़ एक जोड़ी जूते का चमड़ा बचा था। उसने चमड़ा काटा और सो गया।`],
    [`In the morning, he found a perfect pair of shoes on his table! A customer bought them for a good price.`, `सुबह उसे मेज़ पर एक सुंदर जोड़ी जूते मिले! एक ग्राहक ने उन्हें अच्छे दाम में खरीद लिया।`],
    [`This happened every night. So the shoemaker and his wife hid and watched. Two tiny elves came and sewed the shoes quickly.`, `यह हर रात होने लगा। इसलिए मोची और उसकी पत्नी छिपकर देखने लगे। दो नन्हे बौने आए और फटाफट जूते सिल दिए।`],
    [`The elves wore old rags. So the wife sewed them tiny clothes as a thank-you gift. The elves danced with joy and went away happily.`, `बौनों के कपड़े फटे-पुराने थे। इसलिए पत्नी ने धन्यवाद के तोहफ़े में उनके लिए छोटे-छोटे कपड़े सिले। बौने खुशी से नाचे और हँसते हुए चले गए।`],
  ]),
  story("magic-porridge-pot", G, ["The Magic Porridge Pot", "जादुई खीर की हांडी"], ["Listen carefully and remember important words.", "ज़रूरी बातें ध्यान से सुनो और याद रखो।"], [
    [`A kind girl was given a magic pot. When she said "Cook, little pot, cook!" it made sweet porridge. When she said "Stop, little pot!" it stopped.`, `एक भली लड़की को एक जादुई हांडी मिली। "पक, छोटी हांडी, पक!" कहने पर उसमें मीठी खीर बनती, और "रुक, छोटी हांडी!" कहने पर वह रुक जाती।`],
    [`She and her mother were never hungry again. One day, the girl went out, and her mother felt hungry.`, `अब वह और उसकी माँ कभी भूखी नहीं रहीं। एक दिन लड़की बाहर गई, और माँ को भूख लगी।`],
    [`"Cook, little pot, cook!" said the mother. The pot cooked and cooked. But she forgot the words to make it stop!`, `माँ ने कहा, "पक, छोटी हांडी, पक!" हांडी खीर बनाती गई। पर माँ रोकने वाले शब्द भूल गई!`],
    [`Porridge filled the house and flowed down the street! At last the girl came home. "Stop, little pot!" she said, and it stopped. Everyone had to eat their way home!`, `खीर पूरे घर में भर गई और गली में बहने लगी! आख़िर लड़की घर लौटी और बोली, "रुक, छोटी हांडी!" हांडी रुक गई। लोगों को घर पहुँचने के लिए खीर खाते-खाते रास्ता बनाना पड़ा!`],
  ]),
  story("town-musicians", G, ["The Town Musicians", "चार संगीतकार"], ["Friends who work together can do amazing things.", "साथ मिलकर दोस्त कमाल कर सकते हैं।"], [
    [`An old donkey, a dog, a cat and a rooster were no longer wanted by their owners. They met on the road and became friends.`, `एक बूढ़ा गधा, एक कुत्ता, एक बिल्ली और एक मुर्गा अपने मालिकों के काम के नहीं रहे थे। वे रास्ते में मिले और दोस्त बन गए।`],
    [`"Let us go to the town and become musicians!" said the donkey. At night, they saw a house with robbers inside, eating a big dinner.`, `गधे ने कहा, "चलो शहर चलकर संगीतकार बनते हैं!" रात को उन्हें एक घर दिखा, जिसमें डाकू बैठे दावत उड़ा रहे थे।`],
    [`The dog stood on the donkey, the cat on the dog, and the rooster on top. Then they all sang together: "Hee-haw! Woof! Meow! Cock-a-doodle-doo!"`, `कुत्ता गधे पर चढ़ा, बिल्ली कुत्ते पर, और मुर्गा सबसे ऊपर। फिर सब एक साथ गाने लगे, "ढेंचू! भौं! म्याऊँ! कुकड़ूँ-कूँ!"`],
    [`The robbers thought it was a monster and ran away! The four friends ate the dinner and lived happily in the house forever.`, `डाकुओं को लगा कि कोई राक्षस आ गया है और वे भाग गए! चारों दोस्तों ने खाना खाया और हमेशा के लिए उस घर में खुशी से रहने लगे।`],
  ]),
  story("star-coins", G, ["The Star Coins", "तारों के सिक्के"], ["A giving heart is always rewarded.", "जो दूसरों को देता है, उसे बहुत कुछ मिलता है।"], [
    [`A poor little girl had only her clothes and a piece of bread. Still, she was always kind.`, `एक ग़रीब छोटी लड़की के पास बस उसके कपड़े और रोटी का एक टुकड़ा था। फिर भी वह हमेशा दयालु रहती थी।`],
    [`She met a hungry man and gave him her bread. She met a cold child and gave him her cap.`, `उसे एक भूखा आदमी मिला, तो उसने अपनी रोटी दे दी। एक ठिठुरता बच्चा मिला, तो उसने अपनी टोपी दे दी।`],
    [`She gave away her coat and her scarf too, until she had almost nothing left.`, `उसने अपना कोट और दुपट्टा भी दे दिया, जब तक उसके पास लगभग कुछ नहीं बचा।`],
    [`Then the stars in the sky began to fall, and they turned into shining gold coins! The kind girl was never poor again.`, `तभी आसमान से तारे गिरने लगे और चमकते सोने के सिक्कों में बदल गए! उस दयालु लड़की को फिर कभी ग़रीबी नहीं देखनी पड़ी।`],
  ]),
  story("ugly-duckling", HCA, ["The Ugly Duckling", "बदसूरत बत्तख का बच्चा"], ["Everyone grows into something beautiful in their own time.", "हर कोई अपने समय पर खिलता है।"], [
    [`A mother duck's eggs hatched. But one duckling was big and grey and looked different from the others.`, `एक बत्तख के अंडों से बच्चे निकले। पर एक बच्चा बड़ा, सलेटी और बाक़ियों से अलग दिखता था।`],
    [`The other animals laughed at him. "You are so ugly!" they said. The sad duckling ran away.`, `दूसरे जानवर उस पर हँसते थे, "तुम कितने बदसूरत हो!" उदास बच्चा वहाँ से चला गया।`],
    [`He spent a long, cold winter alone, hiding in the reeds by a lake.`, `उसने एक लंबी, ठंडी सर्दी अकेले, झील के किनारे घास में छिपकर बिताई।`],
    [`In spring, he saw his reflection in the water. He had grown into a beautiful white swan! Other swans welcomed him, and he was happy at last.`, `बसंत में उसने पानी में अपनी परछाई देखी। वह एक सुंदर सफ़ेद हंस बन चुका था! दूसरे हंसों ने उसका स्वागत किया, और आख़िरकार वह खुश हो गया।`],
  ]),
  story("emperors-new-clothes", HCA, ["The Emperor's New Clothes", "राजा के नए कपड़े"], ["Be brave enough to tell the truth.", "सच बोलने की हिम्मत रखो।"], [
    [`An emperor loved new clothes. Two tricksters came and said, "We make magic cloth. Only clever people can see it!"`, `एक राजा को नए कपड़ों का बहुत शौक़ था। दो ठग आए और बोले, "हम जादुई कपड़ा बनाते हैं। इसे सिर्फ़ समझदार लोग देख सकते हैं!"`],
    [`They pretended to weave, but there was no cloth at all. Nobody wanted to look foolish, so everyone said, "How beautiful!"`, `उन्होंने बुनने का नाटक किया, पर वहाँ कोई कपड़ा था ही नहीं। कोई बेवकूफ़ नहीं दिखना चाहता था, इसलिए सबने कहा, "कितना सुंदर!"`],
    [`The emperor walked through the town in his "new clothes." The people clapped and cheered, pretending to see them.`, `राजा अपने "नए कपड़े" पहनकर शहर में निकला। लोग कपड़े देखने का नाटक करते हुए तालियाँ बजाने लगे।`],
    [`Then a little child shouted, "But he is only wearing his underclothes!" Everyone laughed, and the emperor learned that honesty matters more than looking clever.`, `तभी एक छोटे बच्चे ने कहा, "पर राजा ने तो बस अंदर के कपड़े पहने हैं!" सब हँस पड़े, और राजा ने सीखा कि समझदार दिखने से ज़्यादा ज़रूरी है सच।`],
  ]),
  story("little-red-hen", F, ["The Little Red Hen", "छोटी लाल मुर्गी"], ["Those who help with the work share the reward.", "जो मेहनत में साथ देता है, वही फल में भी हिस्सेदार होता है।"], [
    [`The little red hen found some wheat seeds. "Who will help me plant them?" she asked. "Not I," said the dog, the cat and the duck.`, `छोटी लाल मुर्गी को गेहूँ के दाने मिले। उसने पूछा, "इन्हें बोने में कौन मेरी मदद करेगा?" कुत्ता, बिल्ली और बत्तख बोले, "मैं नहीं।"`],
    [`So she planted them herself. When the wheat grew tall, she asked, "Who will help me cut it?" "Not I," they all said.`, `तो उसने ख़ुद ही दाने बो दिए। जब गेहूँ बड़ा हुआ, उसने पूछा, "इसे काटने में कौन मदद करेगा?" सबने कहा, "मैं नहीं।"`],
    [`She cut the wheat, took it to the mill and baked a warm loaf of bread, all by herself.`, `उसने अकेले ही गेहूँ काटा, चक्की पर पिसवाया और गरम-गरम रोटी बनाई।`],
    [`"Who will help me eat this bread?" she asked. "I will!" said everyone. "No," said the hen. "You did not help, so my chicks and I will eat it." Next time, everyone helped.`, `उसने पूछा, "इस रोटी को खाने में कौन मदद करेगा?" सब बोले, "मैं!" मुर्गी बोली, "नहीं, तुमने मदद नहीं की, इसलिए इसे मैं और मेरे चूज़े खाएँगे।" अगली बार सबने मदद की।`],
  ]),
  story("gingerbread-man", F, ["The Gingerbread Man", "जिंजरब्रेड गुड्डा"], ["Do not be too proud, and be careful whom you trust.", "घमंड मत करो, और सोच-समझकर भरोसा करो।"], [
    [`An old woman baked a gingerbread man. When she opened the oven, he jumped out and ran away!`, `एक बूढ़ी अम्मा ने जिंजरब्रेड का एक गुड्डा बनाया। जैसे ही उन्होंने ओवन खोला, वह कूदकर भाग निकला!`],
    [`"Run, run, as fast as you can! You can't catch me, I'm the Gingerbread Man!" he sang. The old woman, a cow and a horse all chased him.`, `वह गाने लगा, "भागो, भागो, जितना भाग सको! मुझे न पकड़ पाओगे, मैं हूँ जिंजरब्रेड गुड्डा!" अम्मा, एक गाय और एक घोड़ा, सब उसके पीछे भागे।`],
    [`He came to a river and could not swim. A sly fox said, "Jump on my back, and I will carry you across."`, `वह एक नदी तक पहुँचा, पर उसे तैरना नहीं आता था। एक चालाक लोमड़ी बोली, "मेरी पीठ पर बैठ जाओ, मैं तुम्हें पार करा दूँगी।"`],
    [`Halfway across, the fox said, "Climb onto my nose." Snap! The fox gobbled him up. And that was the end of the Gingerbread Man.`, `आधे रास्ते में लोमड़ी बोली, "मेरी नाक पर आ जाओ।" और गप्प! लोमड़ी उसे खा गई। यहीं जिंजरब्रेड गुड्डे की कहानी ख़त्म हुई।`],
  ]),
  story("three-little-pigs", F, ["The Three Little Pigs", "तीन छोटे सूअर"], ["Hard work pays off.", "मेहनत का फल मीठा होता है।"], [
    [`Three little pigs left home to build their own houses. The first pig quickly built a house of straw.`, `तीन छोटे सूअर अपना-अपना घर बनाने निकले। पहले सूअर ने जल्दी से भूसे का घर बना लिया।`],
    [`The second pig built a house of sticks. The third pig worked hard all day to build a strong house of bricks.`, `दूसरे ने लकड़ियों का घर बनाया। तीसरे ने दिन भर मेहनत करके ईंटों का मज़बूत घर बनाया।`],
    [`A hungry wolf came. He huffed and puffed and blew down the straw house, then the stick house! The two pigs ran to their brother's brick house.`, `एक भूखा भेड़िया आया। उसने ज़ोर से फूँक मारकर भूसे का घर उड़ा दिया, फिर लकड़ी का घर भी! दोनों सूअर भागकर अपने भाई के ईंटों वाले घर में पहुँच गए।`],
    [`The wolf huffed and puffed, but the brick house did not fall. Tired out, he ran away and never came back. The three pigs lived safely together.`, `भेड़िये ने बहुत फूँका, पर ईंटों का घर नहीं गिरा। थककर वह भाग गया और कभी नहीं लौटा। तीनों सूअर सुरक्षित साथ रहने लगे।`],
  ]),
  story("goldilocks-and-three-bears", F, ["Goldilocks and the Three Bears", "गोल्डीलॉक्स और तीन भालू"], ["Respect other people's things.", "दूसरों की चीज़ों का सम्मान करो।"], [
    [`A girl named Goldilocks found a little house in the woods. Nobody was home, but she walked right in.`, `गोल्डीलॉक्स नाम की एक लड़की को जंगल में एक छोटा-सा घर मिला। घर में कोई नहीं था, फिर भी वह अंदर चली गई।`],
    [`She tasted three bowls of porridge. One was too hot, one was too cold, and one was just right, so she ate it all up.`, `उसने खीर के तीन कटोरे चखे। एक बहुत गरम था, एक बहुत ठंडा, और एक बिल्कुल ठीक, तो उसने वह पूरा खा लिया।`],
    [`She tried three beds. One was too hard, one was too soft, and one was just right. She fell fast asleep.`, `फिर उसने तीन बिस्तर आज़माए। एक बहुत सख़्त था, एक बहुत नरम, और एक बिल्कुल ठीक। वह उस पर गहरी नींद सो गई।`],
    [`The three bears came home. "Someone ate my porridge!" cried Baby Bear. Goldilocks woke up, saw the bears and ran all the way home. She never went into a house without asking again.`, `तीनों भालू घर लौटे। छोटा भालू चिल्लाया, "किसी ने मेरी खीर खा ली!" गोल्डीलॉक्स जागी, भालुओं को देखा और भागकर घर पहुँच गई। उसके बाद उसने कभी बिना पूछे किसी के घर में क़दम नहीं रखा।`],
  ]),
  story("enormous-turnip", F, ["The Enormous Turnip", "बहुत बड़ी शलजम"], ["Every helper counts, even the smallest one.", "हर मदद मायने रखती है, चाहे सबसे छोटी ही क्यों न हो।"], [
    [`An old man planted a turnip seed. It grew bigger and bigger, until it was enormous!`, `एक बूढ़े बाबा ने शलजम का बीज बोया। वह बढ़ता गया, बढ़ता गया, और बहुत बड़ा हो गया!`],
    [`He pulled and pulled, but it would not come out. So the old woman came to help. They pulled and pulled. Still it stayed.`, `बाबा ने खींचा और खींचा, पर शलजम नहीं निकली। तब अम्मा मदद करने आईं। दोनों ने खींचा, फिर भी नहीं निकली।`],
    [`A boy came, then a girl, then a dog and a cat. They all pulled together, but the turnip did not move.`, `फिर एक लड़का आया, फिर एक लड़की, फिर एक कुत्ता और एक बिल्ली। सबने मिलकर खींचा, पर शलजम टस से मस नहीं हुई।`],
    [`At last, a tiny mouse joined in. They pulled one more time, and pop! Out came the turnip. They all fell down laughing and made a big pot of soup.`, `आख़िर में एक नन्हा चूहा भी आया। सबने एक बार और खींचा, और फट्! शलजम बाहर निकल आई। सब हँसते हुए गिर पड़े और फिर सबने मिलकर शलजम का बड़ा-सा सूप बनाया।`],
  ]),
  story("stone-soup", F, ["Stone Soup", "पत्थर का सूप"], ["When everyone shares a little, there is plenty for all.", "जब सब थोड़ा-थोड़ा बाँटते हैं, तो सबके लिए बहुत हो जाता है।"], [
    [`A hungry traveller came to a village. Nobody wanted to share food with him.`, `एक भूखा मुसाफ़िर एक गाँव में आया। कोई भी उसके साथ खाना बाँटना नहीं चाहता था।`],
    [`So he put a big pot of water on a fire and dropped in a stone. "I am making stone soup!" he said. The villagers came to watch.`, `तो उसने आग पर पानी का एक बड़ा बर्तन रखा और उसमें एक पत्थर डाल दिया। वह बोला, "मैं पत्थर का सूप बना रहा हूँ!" गाँव वाले देखने आ गए।`],
    [`"It would taste better with a carrot," he said. One villager brought a carrot. Others brought potatoes, onions, beans and salt.`, `उसने कहा, "एक गाजर डल जाए तो और स्वाद आएगा।" एक गाँव वाला गाजर ले आया। दूसरे आलू, प्याज़, सेम और नमक ले आए।`],
    [`Soon the soup smelled delicious. Everyone sat down and ate together. "Who knew a stone could make such good soup?" they laughed.`, `जल्दी ही सूप की ख़ुशबू चारों ओर फैल गई। सबने साथ बैठकर खाया और हँसते हुए बोले, "किसे पता था कि पत्थर से इतना अच्छा सूप बनता है?"`],
  ]),
  story("chicken-little", F, ["Chicken Little", "डरपोक चूज़ी"], ["Find out the facts before you panic.", "घबराने से पहले सच पता करो।"], [
    [`An acorn fell on Chicken Little's head. "The sky is falling!" she cried. "I must tell the king!"`, `चूज़ी के सिर पर एक बलूत का फल गिरा। वह चिल्लाई, "आसमान गिर रहा है! मुझे राजा को बताना होगा!"`],
    [`On the way, she met Henny Penny and Ducky Lucky. "The sky is falling!" she told them. They ran with her, scared too.`, `रास्ते में उसे मुर्गी मौसी और बत्तख बहन मिलीं। उसने कहा, "आसमान गिर रहा है!" वे भी डरकर उसके साथ भागने लगीं।`],
    [`Then they met Goosey Loosey and Turkey Lurkey. Soon a whole line of birds was running and shouting.`, `फिर उन्हें हंसी रानी और टर्की भैया मिले। जल्दी ही पक्षियों की पूरी लाइन चिल्लाते हुए भागने लगी।`],
    [`A wise old owl stopped them. "Show me where the sky fell," he said. Chicken Little showed him the acorn. Everyone laughed. The sky was not falling at all!`, `एक समझदार बूढ़े उल्लू ने उन्हें रोका और कहा, "दिखाओ, आसमान कहाँ गिरा?" चूज़ी ने उसे बलूत का फल दिखाया। सब हँस पड़े। आसमान तो गिरा ही नहीं था!`],
  ]),
];
