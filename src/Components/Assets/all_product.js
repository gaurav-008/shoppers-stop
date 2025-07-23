import men1 from './men1.png';
import men2 from './men2.png';
import men3 from './men3.png';
import men4 from './men4.png';
import men5 from './men5.png';
import men6 from './men6.png';
import men7 from './men7.png';
import men8 from './men8.png';
import men9 from './menwithvideo.jpeg';
import men10 from './men10.png';
import Girl1 from './Girl1.png';
import Girl2 from './Girl2.png';
import Girl3 from './Girl3.png';
import Girl4 from './Girl4.png';
import Girl5 from './Girl5.png';
import Girl6 from './Girl6.png';
import Girl7 from './Girl7.png';
import Girl8 from './Girl8.png';
import Boy1 from './boy1.jpeg';
import Boy2 from './boy2.jpeg';
import Boy3 from './boy3.jpg';
import Boy4 from './boy4.jpg';
import Boy5 from './boy5.jpg';
import Boy6 from './boy6.jpg';
import Boy7 from './boy7.jpg';
import Boy8 from './boy8.jpg';
import Women1 from './women1.jpeg';
import Women2 from './women2.jpeg';
import Women3 from './women3.png';
import Women4 from './women4.png';
import Women5 from './women5.png';
import Women6 from './women6.png';
import Women7 from './women7.png';
import Women8 from './women8.png';
import Women9 from './women9.png';
import Women10 from './women10.png';
import Women11 from './Women11.png';
import Women12 from './Women12.png';
import Women13 from './women13.png';
import Women14 from './women14.png';

function getRandomPrice() {
  return Math.floor(Math.random() * (3000 - 1500 + 1)) + 1500;
}
function getOldPrice(newPrice) {
  const percent = Math.random() * 0.3 + 0.1; // 10% to 40%
  return Math.round(newPrice * (1 + percent));
}
let all_product = [
  // Women
  {
    id: 1,
    name: "Urban Muse Saree",
    category: "women",
    image: Women1,
    new_price: getRandomPrice(),
    old_price: 0, // will be set below
    description: "Turn the streets into your runway with the Urban Muse Saree — a bold blend of tradition and street-style rebellion. Crafted in lightweight georgette, this saree features abstract graffiti-inspired prints in vibrant, clashing colors that echo the raw energy of city walls. With a modern drape and unapologetic attitude, it’s made for women who redefine elegance on their own terms. Pair it with sneakers or combat boots for that edgy twist.",
    color: "Pink",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 2,
    name: "Ripped Rebel Slouch Denim",
    category: "women",
    image: Women8,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Meet the RippedRebel Slouch Denim — the ultimate in effortlessly cool streetwear. These ripped baggy jeans channel a laid-back attitude with heavy distressing, loose-fit silhouette, and drop-crotch comfort. Crafted from rugged, washed cotton denim, they bring vintage grunge energy with a modern twist. Style it with a crop top or oversized hoodie to complete your downtown edge.",
    color: "Blue",
    fabric: "Denim",
    style: "Summer",
  },
  {
    id: 3,
    name: "InkSpire Drape",
    category: "women",
    image: Women3,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Bold. Unfiltered. Iconic. The InkSpire Drape is where street art meets ethnic elegance. Splashed with expressive graffiti motifs and rebellious color strokes, this saree is a wearable canvas for self-expression. Crafted in soft-flowing crepe, it lets you move with power and fluidity. Whether it’s an art event or a fashion-forward soirée, this saree doesn’t whisper — it speaks volumes.",
    color: "Black",
    fabric: "Wool",
    style: "Formal",
  },
  {
    id: 4,
    name: "GraffDrip Denim",
    category: "women",
    image: Women12,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Unapologetically loud and proudly street — the GraffDrip Denim is made for those who live to stand out. Featuring oversized ripped legs, bold graffiti patchwork, and a relaxed fit that oozes confidence, these jeans fuse Y2K attitude with underground art culture. Whether you’re owning the pavement or the party, this is more than denim — it’s a statement.",
    color: "Blue",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 5,
    name: "BloomRush Saree",
    category: "women",
    image: Women5,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Step into a sunlit dream with the BloomRush Saree — a breathtaking fusion of vintage floral art and earthy bohemian charm. Crafted from flowy, lightweight fabric with hand-drawn motifs and rich rustic tones, this drape captures the wild, untamed spirit of nature. The playful tassels, antique belt accent, and heritage-inspired borders make it a true statement for free-spirited souls who carry tradition with a twist.",
    color: "Maroon",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 6,
    name: "Baroque Blaze Saree",
    category: "women",
    image: Women10,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "ADrop tradition with a beat — the Baroque Blaze Saree is where heritage meets high-street heat. Draped in a blackout base and lit up with graffiti-style florals in fiery reds, mustards, and rust tones, this piece is straight out of a royal street mural. The hip-hop edge comes alive with oversized prints, power shoulders, and regal drama. Pair it with sneakers or chains — because this saree’s not here to behave, it’s here to dominate.",
    color: "Floral",
    fabric: "Silk",
    style: "Elegant",
  },
  {
    id: 7,
    name: "Neon Nakhra Saree",
    category: "women",
    image: Women7,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Turn city streets into your runway with the Neon Nakhra Saree — a futuristic drape that pulses with color and confidence. With ultraviolet embroidery, bold gradient blends, and unapologetic attitude, this piece drops heritage into a hip-hop remix. Inspired by neon nights, digital dreams, and desi drama — it’s made for queens who slay with swag. From block parties to big fat sangeets, this saree brings tradition with a trap beat.",
    color: "Night Teal",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 8,
    name: "Sanskaari Savage Saree",
    category: "women",
    image: Women2,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Traditional drape, but make it ruthless. The Sanskaari Savage Saree flips the script on what desi can be — bold mustard flow paired with spiked belts, biker boots, and underground attitude. Styled with heavy-metal jewellery and leather energy, this look is pure fusion fire — from mandap to moshpit. Made for queens who spit bars in bangles and break norms in nine yards.",
    color: "Yellow",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 9,
    name: "NeoNachi Saree",
    category: "women",
    image: Women14,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Enter the future draped in legacy. The NeoNachi Saree fuses temple elegance with night-city power — vibrant silk drenched in neon dreams, antique motifs glowing under LED skies. Paired with a kamarbandh and queen-core jewels, this is for the woman who can walk a red carpet or rule a metaverse. Tradition coded in pixels, attitude wrapped in silk.",
    color: "Pink",
    fabric: "Silk",
    style: "Formal",
  },
  {
    id: 10,
    name: "Graffique Rush Dress",
    category: "women",
    image: Women11,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Where fashion tags the streets. The Graffique Rush Dress is a riot of color, wrapped in hip-hop heat and downtown pulse. All-over graffiti prints in bold lettering, a cinched belt for that sharp edge, and unapologetic attitude stitched into every thread. Pair it with oversized sunnies and fearless energy.",
    color: "White",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 11,
    name: "Rugged Midnight Rebel Cargo Denims",
    category: "women",
    image: Women13,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "The Midnight Rebel Cargo Denims are a street-born attitude stitched in every rip. With wide-leg swagger, raw-edge distressing, and utility cargo pockets, these jeans bring bold ‘90s nostalgia back with a vengeance. Designed for neon-lit nights and fearless fits, this is not just denim—it’s your power stance. Pair with a crop and confidence. Own the street. Own the scene.",
    color: "Blue",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 12,
    name: "Sundown Symphony Saree",
    category: "women",
    image: Women4,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "The Sundown Symphony Saree is a celebration of tradition wrapped in the warmth of twilight. Crafted with a kaleidoscope of handwoven motifs and drenched in vibrant hues, this saree flows like poetry in motion. The deep teal blouse with intricate texture balances the explosion of colors in the drape, exuding regal grace and bold identity.",
    color: "Yellow",
    fabric: "Cotton",
    style: "Summer",
  },
  // Men
  {
    id: 13,
    name: "Urban Grind Ripped Baggy Jeans",
    category: "men",
    image: men1,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Step into the rhythm of the street with the Urban Grind Ripped Baggy Jeans — a bold statement of raw attitude and effortless style. Featuring exaggerated distressing, oversized cuts, and vintage wash fades, these jeans channel pure hip-hop nostalgia with a modern flex.",
    color: "Blue",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 14,
    name: "The Urban Vibes Graffiti Hoodie",
    category: "men",
    image: men2,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Step into the streets with undeniable style in our Urban Vibes Graffiti Hoodie. This isn't just a hoodie; it's a wearable masterpiece that captures the raw energy and vibrant artistry of urban cultur.",
    color: "Graffiti",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 15,
    name: "The Street Canvas Full Graffiti Ensemble (Hoodie & Jeans Set)",
    category: "men",
    image: men3,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Make every street your runway with our bold Street Canvas Graffiti Ensemble. This complete look isn't just clothing; it's an immersive experience in urban art, designed for those who dare to stand out. Inspired by authentic street art, this outfit brings the vibrant energy of the city directly to your wardrobe",
    color: "Graffiti",
    fabric: "Leather",
    style: "Formal",
  },
  {
    id: 16,
    name: "Men's Blue Denim Shirt",
    category: "men",
    image: men4,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's blue denim shirt that is both casual and durable.",
    color: "Blue",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 17,
    name: "Men's Grey Hoodie",
    category: "men",
    image: men5,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's grey hoodie for a casual and comfortable look.",
    color: "Grey",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 18,
    name: "Men's Red T-shirt",
    category: "men",
    image: men6,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's red t-shirt for a bold and energetic look.",
    color: "Red",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 19,
    name: "Men's Black Jeans",
    category: "men",
    image: men7,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's black denim jeans that is both comfortable and durable.",
    color: "Black",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 20,
    name: "Men's White Polo",
    category: "men",
    image: men8,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's white polo shirt for a clean and professional look.",
    color: "White",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 21,
    name: "Men's Blue Blazer",
    category: "men",
    image: men9,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's blue blazer that is perfect for formal and semi-formal events.",
    color: "Blue",
    fabric: "Wool",
    style: "Formal",
  },
  {
    id: 22,
    name: "Men's Grey Trousers",
    category: "men",
    image: men10,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's grey trousers that are comfortable and versatile.",
    color: "Grey",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 23,
    name: "Men's Black T-shirt",
    category: "men",
    image: men3,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's black t-shirt for a casual and laid-back look.",
    color: "Black",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 24,
    name: "Men's White Hoodie",
    category: "men",
    image: men4,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A men's white hoodie for a comfortable and casual look.",
    color: "White",
    fabric: "Cotton",
    style: "Casual",
  },
  // Kids
  {
    id: 25,
    name: "Urban Blast Graffiti Tee and Cargo Set",
    category: "kid",
    image: Boy1,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "Give your child the coolest look on the block with our Urban Blast Kids Graffiti Tee and Cargo Set. Designed for adventurous spirits and budding trendsetters, this outfit combines comfort with an edgy, artistic vibe perfect for playdates, school, or just chilling in style.",
    color: "Orange",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 26,
    name: "Distressed Denim Coat",
    category: "kid",
    image: Girl2,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "The Distressed Denim Coat is a street-inspired piece that brings a raw, rugged vibe to your child's wardrobe. Crafted from rugged, distressed denim, this coat features oversized pockets, a relaxed fit, and a vintage wash that screams urban cool. Perfect for chilly days or just to stand out from the crowd.",
    color: "Pink",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 27,
    name: "Boys Blue Jeans",
    category: "kid",
    image: Girl3,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A boys' blue denim jeans that are comfortable and durable.",
    color: "Blue",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 28,
    name: "Girls Yellow Top",
    category: "kid",
    image: Boy4,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A girls' yellow top that is perfect for a bright and cheerful look.",
    color: "Yellow",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 29,
    name: "Boys Green T-shirt",
    category: "kid",
    image: Girl5,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A boys' green t-shirt that is casual and comfortable.",
    color: "Green",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 30,
    name: "Girls Blue Skirt",
    category: "kid",
    image: Girl6,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A girls' blue skirt that is versatile and can be dressed up or down.",
    color: "Blue",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 31,
    name: "Boys Red Hoodie",
    category: "kid",
    image: Boy3,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A boys' red hoodie for a bold and energetic look.",
    color: "Red",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 32,
    name: "Girls White Dress",
    category: "kid",
    image: Girl8,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A girls' white dress that is perfect for a clean and elegant look.",
    color: "White",
    fabric: "Silk",
    style: "Elegant",
  },
  {
    id: 33,
    name: "Boys Black Jeans",
    category: "kid",
    image: Girl7,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A boys' black denim jeans that are both comfortable and durable.",
    color: "Black",
    fabric: "Denim",
    style: "Casual",
  },
  {
    id: 34,
    name: "Girls Green Top",
    category: "kid",
    image: Boy2,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A girls' green top that is perfect for a fresh and lively look.",
    color: "Green",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 35,
    name: "Boys Yellow T-shirt",
    category: "kid",
    image: Girl4,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A boys' yellow t-shirt that is casual and fun.",
    color: "Yellow",
    fabric: "Cotton",
    style: "Casual",
  },
  {
    id: 36,
    name: "Girls Pink Skirt",
    category: "kid",
    image: Boy5,
    new_price: getRandomPrice(),
    old_price: 0,
    description: "A girls' pink skirt that is perfect for a sweet and girly look.",
    color: "Pink",
    fabric: "Cotton",
    style: "Casual",
  },
];

all_product = all_product.map(p => {
  const new_price = typeof p.new_price === 'function' ? p.new_price() : p.new_price;
  const old_price = getOldPrice(new_price);
  return { ...p, new_price, old_price };
});

export default all_product;
