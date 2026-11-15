// Classic public-domain tales from around the world, retold in our own words.
import { fables } from "./story-data/fables";
import { indianTales } from "./story-data/indian";
import { worldTales } from "./story-data/world";
import type { Story } from "./story-types";

export type { Lang, Story, StoryPage } from "./story-types";

const classics: Story[] = [
  {
    slug: "lion-and-mouse",
    source: "Aesop's Fables",
    minutes: 3,
    title: { en: "The Lion and the Mouse", hi: "शेर और चूहा" },
    moral: {
      en: "Kindness is never wasted. Even small friends can be a big help.",
      hi: "दया कभी बेकार नहीं जाती। छोटे दोस्त भी बड़ी मदद कर सकते हैं।",
    },
    pages: [
      {
        en: "A big lion was sleeping under a tree. A little mouse ran over his nose.",
        hi: "एक बड़ा शेर पेड़ के नीचे सो रहा था। एक छोटा चूहा उसकी नाक पर दौड़ गया।",
      },
      {
        en: "The lion woke up and caught the mouse with his paw. \"Please let me go,\" said the mouse. \"One day I will help you.\"",
        hi: "शेर जाग गया और उसने चूहे को अपने पंजे में पकड़ लिया। चूहा बोला, \"मुझे छोड़ दो। एक दिन मैं तुम्हारी मदद करूँगा।\"",
      },
      {
        en: "The lion laughed. \"How can a tiny mouse help me?\" But he was kind, and he let the mouse go.",
        hi: "शेर हँसा। \"इतना छोटा चूहा मेरी मदद कैसे करेगा?\" पर वह दयालु था, उसने चूहे को जाने दिया।",
      },
      {
        en: "A few days later, the lion was caught in a hunter's net. He roared and roared, but he could not get out.",
        hi: "कुछ दिन बाद शेर एक शिकारी के जाल में फँस गया। वह ज़ोर-ज़ोर से दहाड़ा, पर बाहर नहीं निकल सका।",
      },
      {
        en: "The little mouse heard him. She ran to the net and bit the ropes until the lion was free. \"Thank you, little friend!\" said the lion.",
        hi: "छोटे चूहे ने उसकी आवाज़ सुनी। वह दौड़कर आया और रस्सियाँ कुतर कर शेर को आज़ाद कर दिया। शेर बोला, \"धन्यवाद, छोटे दोस्त!\"",
      },
    ],
  },
  {
    slug: "tortoise-and-hare",
    source: "Aesop's Fables",
    minutes: 3,
    title: { en: "The Tortoise and the Hare", hi: "खरगोश और कछुआ" },
    moral: {
      en: "Slow and steady wins the race.",
      hi: "धीरे-धीरे और लगातार चलने वाला ही जीतता है।",
    },
    pages: [
      {
        en: "A fast hare laughed at a slow tortoise. \"You are so slow!\" he said.",
        hi: "एक तेज़ खरगोश ने धीमे कछुए का मज़ाक उड़ाया। \"तुम कितने धीमे हो!\" उसने कहा।",
      },
      {
        en: "\"Let us have a race,\" said the tortoise calmly. All the animals came to watch.",
        hi: "कछुए ने शांति से कहा, \"चलो, दौड़ लगाते हैं।\" सारे जानवर देखने आए।",
      },
      {
        en: "The hare ran far ahead. \"I have lots of time,\" he thought, and he lay down for a nap.",
        hi: "खरगोश बहुत आगे निकल गया। उसने सोचा, \"मेरे पास बहुत समय है,\" और वह सो गया।",
      },
      {
        en: "The tortoise kept walking, step by step. He did not stop, not even once.",
        hi: "कछुआ धीरे-धीरे चलता रहा, कदम-दर-कदम। वह एक बार भी नहीं रुका।",
      },
      {
        en: "When the hare woke up, the tortoise was already at the finish line. The tortoise won the race!",
        hi: "जब खरगोश जागा, तब तक कछुआ मंज़िल पर पहुँच चुका था। कछुआ दौड़ जीत गया!",
      },
    ],
  },
  {
    slug: "thirsty-crow",
    source: "Aesop's Fables",
    minutes: 2,
    title: { en: "The Thirsty Crow", hi: "प्यासा कौआ" },
    moral: { en: "Where there is a will, there is a way.", hi: "जहाँ चाह, वहाँ राह।" },
    pages: [
      {
        en: "It was a hot summer day. A crow was very, very thirsty.",
        hi: "गर्मी का दिन था। एक कौआ बहुत प्यासा था।",
      },
      {
        en: "He flew here and there and found a pot. But the water was at the very bottom.",
        hi: "वह इधर-उधर उड़ा और उसे एक घड़ा मिला। पर पानी बहुत नीचे था।",
      },
      {
        en: "His beak could not reach the water. The crow thought and thought.",
        hi: "उसकी चोंच पानी तक नहीं पहुँच सकी। कौआ सोचता रहा।",
      },
      {
        en: "Then he had an idea! He dropped small stones into the pot, one by one.",
        hi: "फिर उसे एक उपाय सूझा! उसने एक-एक करके घड़े में छोटे कंकड़ डाले।",
      },
      {
        en: "The water rose up and up. The crow drank the cool water and flew away happily.",
        hi: "पानी ऊपर आता गया। कौए ने ठंडा पानी पिया और खुशी से उड़ गया।",
      },
    ],
  },
  {
    slug: "monkey-and-crocodile",
    source: "Panchatantra",
    minutes: 4,
    title: { en: "The Monkey and the Crocodile", hi: "बंदर और मगरमच्छ" },
    moral: {
      en: "Stay calm and think when you are in trouble.",
      hi: "मुसीबत में घबराओ नहीं, शांत रहकर सोचो।",
    },
    pages: [
      {
        en: "A clever monkey lived in a jamun tree by a river. He gave sweet jamuns to his friend, the crocodile.",
        hi: "नदी किनारे जामुन के पेड़ पर एक चतुर बंदर रहता था। वह अपने दोस्त मगरमच्छ को मीठे जामुन देता था।",
      },
      {
        en: "The crocodile's wife said, \"If the fruit is so sweet, the monkey's heart must be sweeter. Bring it to me!\"",
        hi: "मगरमच्छ की पत्नी बोली, \"जब फल इतने मीठे हैं, तो बंदर का दिल और भी मीठा होगा। उसे मेरे पास लाओ!\"",
      },
      {
        en: "The crocodile asked the monkey to come home for dinner. The monkey sat on his back, and they swam into the river.",
        hi: "मगरमच्छ ने बंदर को खाने पर बुलाया। बंदर उसकी पीठ पर बैठ गया और वे नदी में तैरने लगे।",
      },
      {
        en: "In the middle of the river, the crocodile told the truth. The monkey stayed calm and said, \"Oh! I left my heart in the tree. Let us go back and get it.\"",
        hi: "नदी के बीच में मगरमच्छ ने सच बता दिया। बंदर ने शांत रहकर कहा, \"अरे! मेरा दिल तो पेड़ पर रह गया। चलो, वापस चलकर ले आते हैं।\"",
      },
      {
        en: "The crocodile swam back. The monkey jumped up into his tree and was safe. \"A heart lives inside you, not in a tree!\" he laughed.",
        hi: "मगरमच्छ वापस तैरकर आया। बंदर कूदकर पेड़ पर चढ़ गया और बच गया। वह हँसा, \"दिल तो शरीर के अंदर होता है, पेड़ पर नहीं!\"",
      },
    ],
  },
  {
    slug: "boy-who-cried-wolf",
    source: "Aesop's Fables",
    minutes: 3,
    title: { en: "The Boy Who Cried Wolf", hi: "भेड़िया आया!" },
    moral: {
      en: "Always tell the truth, so people can trust you.",
      hi: "हमेशा सच बोलो, ताकि लोग तुम पर भरोसा करें।",
    },
    pages: [
      {
        en: "A shepherd boy looked after sheep near a village. One day he felt bored.",
        hi: "एक गाँव के पास एक लड़का भेड़ें चराता था। एक दिन वह ऊब गया।",
      },
      {
        en: "\"Wolf! Wolf!\" he shouted. The villagers ran to help, but there was no wolf. The boy laughed.",
        hi: "उसने चिल्लाया, \"भेड़िया आया! भेड़िया आया!\" गाँव वाले मदद के लिए दौड़े, पर वहाँ कोई भेड़िया नहीं था। लड़का हँसने लगा।",
      },
      {
        en: "He played the same trick again. The villagers were angry.",
        hi: "उसने फिर से वही मज़ाक किया। गाँव वाले नाराज़ हो गए।",
      },
      {
        en: "Then one evening, a real wolf came! \"Wolf! Wolf! Please help!\" cried the boy.",
        hi: "फिर एक शाम सच में भेड़िया आ गया! लड़का चिल्लाया, \"भेड़िया आया! कृपया मदद करो!\"",
      },
      {
        en: "But this time nobody came. They thought it was another trick. The boy learned to always tell the truth.",
        hi: "पर इस बार कोई नहीं आया। सबको लगा कि यह फिर से मज़ाक है। लड़के ने सीखा कि हमेशा सच बोलना चाहिए।",
      },
    ],
  },
  {
    slug: "ant-and-grasshopper",
    source: "Aesop's Fables",
    minutes: 3,
    title: { en: "The Ant and the Grasshopper", hi: "चींटी और टिड्डा" },
    moral: {
      en: "Work today to be ready for tomorrow.",
      hi: "आज मेहनत करो, ताकि कल के लिए तैयार रहो।",
    },
    pages: [
      {
        en: "All summer, a little ant worked hard. She carried food to her home, grain by grain.",
        hi: "पूरी गर्मी एक छोटी चींटी मेहनत करती रही। वह दाना-दाना करके खाना अपने घर ले जाती थी।",
      },
      {
        en: "A grasshopper sang and played all day. \"Why work so hard? Come and play!\" he said.",
        hi: "एक टिड्डा दिन भर गाता और खेलता रहता था। उसने कहा, \"इतनी मेहनत क्यों? आओ, खेलो!\"",
      },
      {
        en: "\"I am saving food for winter,\" said the ant, and she kept working.",
        hi: "चींटी बोली, \"मैं सर्दी के लिए खाना जमा कर रही हूँ,\" और काम करती रही।",
      },
      {
        en: "Then winter came. It was cold, and there was no food outside. The grasshopper was hungry.",
        hi: "फिर सर्दी आ गई। बहुत ठंड थी और बाहर कोई खाना नहीं था। टिड्डा भूखा था।",
      },
      {
        en: "The kind ant shared some food with him. \"Next summer, I will work too,\" said the grasshopper.",
        hi: "दयालु चींटी ने उसके साथ थोड़ा खाना बाँटा। टिड्डे ने कहा, \"अगली गर्मी में मैं भी मेहनत करूँगा।\"",
      },
    ],
  },
];

export const stories: Story[] = [...classics, ...fables, ...indianTales, ...worldTales];

export const sources = [...new Set(stories.map((s) => s.source))];

/** Light-weight data for the Story of the Day card. */
export const dailyItems = stories.map((s) => ({
  slug: s.slug,
  source: s.source,
  minutes: s.minutes,
  title: s.title,
  moral: s.moral,
  opening: s.pages[0].en,
}));

export const getStory = (slug: string) => stories.find((s) => s.slug === slug);
