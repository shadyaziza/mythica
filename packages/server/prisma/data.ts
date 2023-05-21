const { Prisma } = require('@prisma/client');

export const creatures = [
  {
    name: 'Dragon',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Chinese_dragon_illustration.jpg/1200px-Chinese_dragon_illustration.jpg',
    country_name: 'China',
    country_code: 'CN',
    books: 'Journey to the West,The Hobbit,Harry Potter and the Goblet of Fire',
    description:
      'A legendary creature that symbolizes power, wisdom and auspiciousness. It can control the weather and has a long, serpentine body with scales, claws and horns.',
    characteristics: 'Fire-breathing,Flying,Shapeshifting',
  },
  {
    name: 'Unicorn',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Unicorn_Collage.jpg/1200px-Unicorn_Collage.jpg',
    country_name: 'Europe',
    country_code: 'EU',
    books:
      "The Chronicles of Narnia,The Last Unicorn,Harry Potter and the Philosopher's Stone",
    description:
      'A mythical horse-like animal with a single horn on its forehead. It is often associated with purity, grace and magic. It can heal with its horn and only be tamed by a virgin.',
    characteristics: 'Horned,White,Swift',
  },
  {
    name: 'Phoenix',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Phoenix-Fabelwesen.jpg/1200px-Phoenix-Fabelwesen.jpg',
    country_name: 'Egypt',
    country_code: 'EG',
    books:
      'The Egyptian Book of the Dead,The Arabian Nights,Harry Potter and the Order of the Phoenix',
    description:
      'A mythical bird that represents rebirth and immortality. It has colorful feathers and a fiery tail. It can burst into flames and rise from its own ashes.',
    characteristics: 'Flaming,Regenerating,Majestic',
  },
  {
    name: 'Mermaid',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Mermaid_by_John_William_Waterhouse.jpg/1200px-Mermaid_by_John_William_Waterhouse.jpg',
    country_name: 'Worldwide',
    country_code: 'WW',
    books:
      'The Odyssey,The Little Mermaid,Pirates of the Caribbean: On Stranger Tides',
    description:
      'A mythical creature that has the upper body of a human and the lower body of a fish. It lives in the sea and can communicate with aquatic animals. It is often depicted as beautiful and enchanting.',
    characteristics: 'Aquatic,Scaly,Musical',
  },
  {
    name: 'Minotaur',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Minotauros_Knosos.jpg/1200px-Minotauros_Knosos.jpg',
    country_name: 'Greece',
    country_code: 'GR',
    books:
      'The Myth of Theseus and the Minotaur,The Lightning Thief,The Hunger Games',
    description:
      'A mythical creature that has the head and tail of a bull and the body of a man. It was born from the union of a queen and a bull. It dwells in the labyrinth and feeds on human flesh.',
    characteristics: 'Horned,Hairy,Ferocious',
  },
  {
    name: 'Griffin',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Griffin_statue_in_Kutaisi.jpg/1200px-Griffin_statue_in_Kutaisi.jpg',
    country_name: 'Persia',
    country_code: 'IR',
    books:
      'The Epic of Gilgamesh,The Chronicles of Narnia,Fantastic Beasts and Where to Find Them',
    description:
      'A mythical creature that has the head, wings and talons of an eagle and the body and tail of a lion. It is a guardian of treasures and a symbol of divine power.',
    characteristics: 'Winged,Leonine,Fierce',
  },
  {
    name: 'Sphinx',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Sphinx_from_Hatshepsut_Temple.jpg/1200px-Sphinx_from_Hatshepsut_Temple.jpg',
    country_name: 'Egypt',
    country_code: 'EG',
    books: 'The Riddle of the Sphinx,Oedipus Rex,The Kane Chronicles',
    description:
      'A mythical creature that has the head of a human and the body of a lion. It is known for asking riddles and devouring those who cannot answer. It is a protector of sacred places and a symbol of wisdom.',
    characteristics: 'Riddling,Leonine,Mysterious',
  },
  {
    name: 'Centaur',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Centaurs_from_a_fresco_in_Pompeii.jpg/1200px-Centaurs_from_a_fresco_in_Pompeii.jpg',
    country_name: 'Greece',
    country_code: 'GR',
    books:
      "The Iliad,The Chronicles of Narnia,Harry Potter and the Philosopher's Stone",
    description:
      'A mythical creature that has the upper body of a human and the lower body of a horse. It is often depicted as wild, barbaric and lustful. Some centaurs are wise and noble, such as Chiron.',
    characteristics: 'Equine,Humanoid,Savage',
  },
  {
    name: 'Banshee',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Banshee.jpg/1200px-Banshee.jpg',
    country_name: 'Ireland',
    country_code: 'IE',
    books: 'Irish Folklore,Macbeth,Harry Potter and the Chamber of Secrets',
    description:
      'A mythical creature that is a female spirit of death. It appears as a pale woman with long hair and red eyes. It wails or keens to foretell the death of a family member. It is feared and respected by the Irish.',
    characteristics: 'Ghostly,Wailing,Mournful',
  },
  {
    name: 'Yeti',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Yeti_at_Everest_base_camp.jpg/1200px-Yeti_at_Everest_base_camp.jpg',
    country_name: 'Nepal',
    country_code: 'NP',
    books: 'Tibetan Folklore,Tintin in Tibet,Monsters Inc.',
    description:
      'A mythical creature that is a large ape-like animal that lives in the Himalayas. It is also known as the Abominable Snowman. It is elusive and rarely seen by humans. It is revered and feared by the locals.',
    characteristics: 'Hairy,Snowy,Strong',
  },
  {
    name: 'Hydra',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Hydra-Farnese-08389.JPG/1200px-Hydra-Farnese-08389.JPG',
    country_name: 'Greece',
    country_code: 'GR',
    books:
      'The Myth of Heracles and the Hydra,Percy Jackson and the Olympians: The Sea of Monsters,Marvel Comics: Hydra',
    description:
      'A mythical creature that is a multi-headed serpent that lives in a swamp. It has poisonous breath and blood. It can regenerate two heads for every one that is cut off. It was slain by Heracles as one of his twelve labors.',
    characteristics: 'Multi-headed,Poisonous,Regenerating',
  },
  {
    name: 'Werewolf',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Werewolf_by_Lynton_Levengood.jpg/1200px-Werewolf_by_Lynton_Levengood.jpg',
    country_name: 'Worldwide',
    country_code: 'WW',
    books: 'The Epic of Gilgamesh,Dracula,Twilight Saga',
    description:
      'A mythical creature that is a human who can transform into a wolf-like beast. It is often associated with the full moon and lycanthropy. It is feared for its savagery and bloodlust.',
    characteristics: 'Shapeshifting,Furry,Howling',
  },
  {
    name: 'Vampire',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Vampire_by_Philip_Burne-Jones.jpg',
    country_name: 'Worldwide',
    country_code: 'WW',
    books: 'The Vampyre,Dracula,Interview with the Vampire',
    description:
      'A mythical creature that is a reanimated corpse that feeds on the blood of the living. It has pale skin, fangs and red eyes. It can turn into a bat and hypnotize its victims. It is vulnerable to sunlight, garlic and stakes.',
    characteristics: 'Bloodsucking,Undead,Nocturnal',
  },
  {
    name: 'Fairy',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Cicely_Mary_Barker_-Flower_Fairies-The_Song_of_the_Fuchsia_Fairy.jpg',
    country_name: 'Worldwide',
    country_code: 'WW',
    books: 'A Midsummer Night’s Dream,Peter Pan,Artemis Fow',
    description:
      'A mythical creature that is a small humanoid with wings. It lives in nature and can use magic. It is often depicted as playful, mischievous and benevolent. It can grant wishes and heal with its dust.',
    characteristics: 'Winged,magical,tiny',
  },
  {
    name: 'Cyclops',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Polyphemus_Mostra_di_Pompei_2019.jpg/1200px-Polyphemus_Mostra_di_Pompei_2019.jpg',
    country_name: 'Greece',
    country_code: 'GR',
    books:
      'The Odyssey,The Argonautica,Percy Jackson and the Olympians: The Sea of Monsters',
    description:
      'A mythical creature that is a giant with one eye in the middle of its forehead. It is a descendant of the Titans and a skilled craftsman. It is often depicted as brutish, violent and cannibalistic. It can hurl boulders and create thunderstorms.',
    characteristics: 'One-eyed,giant,strong',
  },
  {
    name: 'Medusa',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Medusa_by_Caravaggio_2.jpg/1200px-Medusa_by_Caravaggio_2.jpg',
    country_name: 'Greece',
    country_code: 'GR',
    books:
      'The Myth of Perseus and Medusa,Clash of the Titans,Percy Jackson and the Olympians: The Lightning Thief',
    description:
      'A mythical creature that is a woman with snakes for hair. She was once a beautiful priestess of Athena, but was cursed by the goddess for breaking her vow of chastity. She can turn anyone who looks at her into stone.',
    characteristics: 'Snake-haired,Petrifying,Cursed',
  },
  {
    name: 'Kraken',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Kraken_by_Johnny_Automatic.svg/1200px-Kraken_by_Johnny_Automatic.svg.png',
    country_name: 'Norway',
    country_code: 'NO',
    books:
      "Norse Folklore,Moby-Dick,Pirates of the Caribbean: Dead Man's Chest",
    description:
      'A mythical creature that is a giant squid-like monster that lives in the depths of the sea. It is feared by sailors and fishermen. It can create whirlpools and drag ships and whales to their doom.',
    characteristics: 'Tentacled,Aquatic,Monstrous',
  },
  {
    name: 'Zombie',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Zombie-walk_paris_2011.jpg/1200px-Zombie-walk_paris_2011.jpg',
    country_name: 'Haiti',
    country_code: 'HT',
    books: 'The Serpent and the Rainbow,World War Z,The Walking Dead',
    description:
      'A mythical creature that is a reanimated corpse that has no free will or intelligence. It is created by a sorcerer or a virus. It feeds on the flesh and brains of the living. It can infect others with its bite.',
    characteristics: 'Undead,Cannibalistic,Infectious',
  },
  {
    name: 'Zombie',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Zombie-walk_paris_2011.jpg/1200px-Zombie-walk_paris_2011.jpg',
    country_name: 'Haiti',
    country_code: 'HT',
    books: 'The Serpent and the Rainbow,World War Z,The Walking Dead',
    description:
      'A mythical creature that is a reanimated corpse that has no free will or intelligence. It is created by a sorcerer or a virus. It feeds on the flesh and brains of the living. It can infect others with its bite.',
    characteristics: 'Undead,Cannibalistic,Infectious',
  },
  {
    name: 'Elf',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Elf_by_Luis_Ricardo_Falero.jpg/1200px-Elf_by_Luis_Ricardo_Falero.jpg',
    country_name: 'Germany',
    country_code: 'DE',
    books: 'German Folklore,The Lord of the Rings,The Witcher',
    description:
      'A mythical creature that is a humanoid with pointed ears and a slender build. It lives in forests and mountains and can use magic. It is often depicted as graceful, wise and immortal.',
    characteristics: 'Pointy-eared,Magical,Elusive',
  },
  {
    name: 'Goblin',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Goblin.jpg/1200px-Goblin.jpg',
    country_name: 'Europe',
    country_code: 'EU',
    books:
      "European Folklore,The Hobbit,Harry Potter and the Philosopher's Stone",
    description:
      'A mythical creature that is a small, ugly and mischievous humanoid. It lives in caves and dungeons and likes to hoard treasures and cause trouble. It is often depicted as greedy, cunning and cowardly.',
    characteristics: 'Small,Ugly,Mischievous',
  },
];
