
import { db } from "../src/lib/db";



async function main() {
  const products = [
{
  title: "Modern Sectional Sofa",
  description: "Elevate your living space with this large and comfortable sectional sofa. Featuring a contemporary design, it offers ample seating and a plush, inviting look that will complement a variety of decor styles. Crafted with high-quality materials, this sectional sofa provides exceptional comfort and style.",
  price: 899.99,
  imageUrl: "/images/sofas/modern-sectional.avif",
  category: "SOFA",
  stock: 15
},
{
  title: "Ergonomic Office Chair",
  description: "An ergonomic chair designed for long hours of comfortable work at a desk. Its supportive back and adjustable features help promote good posture and reduce strain.",
  price: 249.99,
  imageUrl: "/images/chairs/ergonomic-office.avif",
  category: "CHAIR",
  stock: 25
},
{
  title: "Leather Recliner Sofa",
  description: "Indulge in unparalleled comfort with this luxurious leather recliner sofa. Sink into the soft, buttery-smooth upholstery and enjoy the superior back support and adjustable positioning that allows you to find your perfect relaxation spot. This premium sofa is the epitome of relaxation and elegance, perfect for creating a cozy, sophisticated atmosphere in your living room.",
  price: 1199.99,
  imageUrl: "/images/sofas/leather-recliner.avif",
  category: "SOFA",
  stock: 10
},
{
  title: "Accent Armchair",
  description: "A stylish armchair that adds a touch of character and sophistication to any room. Its unique design and high-quality materials make it a statement piece for your home.",
  price: 179.99,
  imageUrl: "/images/chairs/accent-armchair.avif",
  category: "CHAIR",
  stock: 15
},
{
  title: "Minimalist Sofa",
  description: "Elevate the style and ambiance of your living space with this minimalist sofa. Crafted with clean lines and a modern aesthetic, this piece is designed to seamlessly integrate into a variety of contemporary and transitional decor schemes. Its compact yet comfortable design makes it an ideal choice for smaller living rooms or apartments, providing a stylish seating solution without overwhelming the room.",
  price: 649.99,
  imageUrl: "/images/sofas/minimalist.avif",
  category: "SOFA",
  stock: 8
},
{
  title: "Rocking Chair",
  description: "A classic wooden rocking chair with a modern twist. This timeless piece provides a soothing, relaxing experience and can be a wonderful addition to any living space or porch.",
  price: 199.99,
  imageUrl: "/images/chairs/rocking-chair.avif",
  category: "CHAIR",
  stock: 10
},
{
  title: "Convertible Sofa Bed",
  description: "Maximize the functionality of your living space with this versatile convertible sofa bed. Effortlessly transform it from a stylish sofa to a comfortable sleeping surface, making it perfect for hosting overnight guests or accommodating additional sleeping needs. Its sleek, modern design blends seamlessly with a variety of decor styles, ensuring it will be a practical and visually appealing addition to your home.",
  price: 499.99,
  imageUrl: "/images/sofas/convertible.avif",
  category: "SOFA",
  stock: 12
},
{
  title: "Leather Recliner Chair",
  description: "A luxurious recliner chair crafted from premium leather. This chair offers ultimate comfort and relaxation, with a smooth reclining mechanism and plush padding for an indulgent seating experience.",
  price: 499.99,
  imageUrl: "/images/chairs/leather-recliner.avif",
  category: "CHAIR",
  stock: 12
},
{
  title: "Fabric Loveseat",
  description: "Cozy up in this compact and comfortable fabric loveseat. Crafted with soft, durable upholstery, it's the perfect seating solution for smaller living spaces or as an accent piece in a larger room. Its classic design and neutral color palette make it easy to coordinate with a variety of decor styles, ensuring it will be a versatile and stylish addition to your home.",
  price: 329.99,
  imageUrl: "/images/sofas/loveseat.avif",
  category: "SOFA",
  stock: 20
},
{
  title: "Velvet Lounge Chair",
  description: "A soft and inviting velvet lounge chair that provides a cozy and comfortable spot for relaxation. Its plush upholstery and stylish design make it a perfect addition to any living room or bedroom.",
  price: 299.99,
  imageUrl: "/images/chairs/velvet-lounge.avif",
  category: "CHAIR",
  stock: 8
},
{
  title: "Chaise Lounge Sofa",
  description: "Indulge in ultimate relaxation with this sleek chaise lounge sofa. Perfectly proportioned for comfortable lounging, this statement piece features a clean, modern silhouette that will elevate the style of any living room or bedroom. Crafted with high-quality materials and attention to detail, this chaise lounge sofa is both visually appealing and exceptionally comfortable, making it the perfect spot to unwind after a long day.",
  price: 749.99,
  imageUrl: "/images/sofas/chaise-lounge.avif",
  category: "SOFA",
  stock: 6
},
{
  title: "Outdoor Patio Chair",
  description: "A weather-resistant outdoor chair designed for your patio or garden. This durable and comfortable chair can withstand the elements, making it perfect for year-round enjoyment of your outdoor living space.",
  price: 129.99,
  imageUrl: "/images/chairs/patio.avif",
  category: "CHAIR",
  stock: 30
},
{
  title: "Classic Chesterfield Sofa",
  description: "Embrace the timeless elegance of the Chesterfield with this beautifully crafted sofa. Featuring the iconic deep button tufting and rolled arms, this sofa exudes a sophisticated, classic charm that will complement both traditional and transitional decor styles. Upholstered in a sumptuous fabric, this Chesterfield sofa offers exceptional comfort and a refined, distinguished look that will be the focal point of any living space.",
  price: 1299.99,
  imageUrl: "/images/sofas/chesterfield.avif",
  category: "SOFA",
  stock: 7
},
{
  title: "Folding Chair",
  description: "A simple and convenient folding chair that is easy to store and transport. Its lightweight design and sturdy construction make it a practical choice for a variety of indoor and outdoor events.",
  price: 49.99,
  imageUrl: "/images/chairs/folding.avif",
  category: "CHAIR",
  stock: 50
},
{
  title: "Mid-Century Modern Sofa",
  description: "Bring a touch of retro-inspired style to your living room with this mid-century modern sofa. Featuring clean lines, tapered wooden legs, and a sleek, low-profile design, this sofa embodies the timeless appeal of the mid-century aesthetic. Crafted with attention to detail and high-quality materials, this sofa offers exceptional comfort and a sophisticated look that will complement a variety of modern and transitional decor schemes.",
  price: 599.99,
  imageUrl: "/images/sofas/mid-century.avif",
  category: "SOFA",
  stock: 18
},
{
  title: "Swivel Chair",
  description: "A cozy bean bag chair that provides a comfortable and relaxing seating option. Its 360-degree swivel feature allows for easy movement and versatility in any room.",
  price: 89.99,
  imageUrl: "/images/chairs/Swivel.avif",
  category: "CHAIR",
  stock: 18
},
{
  title: "Tufted Velvet Sofa",
  description: "Indulge in the luxurious comfort and style of this tufted velvet sofa. The plush, velvety upholstery and deep button tufting create an air of refined elegance, while the sturdy frame and high-density foam cushions provide exceptional support and comfort. This statement piece is the perfect addition to any living room, offering a cozy and visually striking focal point that will elevate the overall aesthetic of your space.",
  price: 799.99,
  imageUrl: "/images/sofas/tufted-velvet.avif",
  category: "SOFA",
  stock: 5
},
{
  title: "Outdoor Chair",
  description: "A comfortable swivel chair designed for outdoor use. Its durable construction and weather-resistant materials make it a great choice for patios, decks, or any other outdoor living area.",
  price: 229.99,
  imageUrl: "/images/chairs/outdoor.avif",
  category: "CHAIR",
  stock: 14
},

    // BED Category
    {
      title: 'Queen Size Platform Bed',
      description: 'A sleek, modern queen-size platform bed designed with minimalistic aesthetics and functionality in mind. The bed is built with a solid wood frame and finished with a matte lacquer that offers both durability and style. The slatted base provides excellent mattress support without the need for a box spring, ensuring a low-profile look while maintaining comfort.',
      price: 599.99,
      stock: 10,
      imageUrl: '/images/beds/queen-platform-bed.avif',
      category: 'BED',
    },
    {
      title: 'Modern Arc Floor Lamp',
      description: 'This elegant arc floor lamp features a sleek, curved design that adds a touch of sophistication to any room. The adjustable arm allows for targeted lighting, making it ideal for living rooms, reading nooks, or bedrooms. The contemporary style complements both modern and traditional decor.',
      price: 169.99,
      stock: 20,
      imageUrl: '/images/lamps/modern-arc-floor-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'King Size Upholstered Bed',
      description: 'This luxurious king-size bed features a plush, upholstered headboard with diamond tufting, adding elegance and sophistication to any bedroom. The sturdy frame is built from solid pine wood, ensuring durability while providing ample support for your mattress. The soft fabric headboard adds comfort and a touch of glamour to your sleeping space.',
      price: 899.99,
      stock: 5,
      imageUrl: '/images/beds/king-upholstered-bed.avif',
      category: 'BED',
    },
    {
      title: 'Vintage Brass Table Lamp',
      description: 'Crafted with a vintage brass finish and a classic silhouette, this table lamp brings timeless elegance to any space. The fabric lampshade diffuses light softly, creating a warm and inviting atmosphere in your living room, bedroom, or study.',
      price: 129.99,
      stock: 18,
      imageUrl: '/images/lamps/vintage-brass-table-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'Twin Bunk Bed with Ladder',
      description: 'The perfect solution for shared rooms or guest accommodations, this twin bunk bed is designed to maximize space while offering comfort and safety. Made from metal, the bed is durable and stable, featuring safety rails on the top bunk and a built-in ladder for easy access.',
      price: 479.99,
      stock: 15,
      imageUrl: '/images/beds/twin-bunk-bed.avif',
      category: 'BED',
    },
    {
      title: 'Industrial Desk Lamp',
      description: 'Inspired by industrial design, this unique desk lamp features exposed pipe detailing and an Edison bulb, creating a rustic yet modern aesthetic. Ideal for workspaces, it adds character and functional lighting to your desk or side table.',
      price: 99.99,
      stock: 15,
      imageUrl: '/images/lamps/industrial-pipe-desk-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'Wooden Daybed',
      description: 'This versatile daybed is crafted from solid wood and finished in a warm walnut tone. It features a pull-out trundle bed that’s perfect for accommodating overnight guests, making it an ideal addition to a guest room, den, or kid’s room.',
      price: 649.99,
      stock: 8,
      imageUrl: '/images/beds/wooden-daybed.avif',
      category: 'BED',
    },
    {
      title: 'Crystal Chandelier Lamp',
      description: 'Add a touch of luxury to your space with this stunning crystal chandelier lamp. The cascading crystals catch and reflect light beautifully, creating an eye-catching display. Perfect for dining rooms, bedrooms, or entryways, this lamp is a statement piece that exudes elegance.',
      price: 229.99,
      stock: 10,
      imageUrl: '/images/lamps/crystal-chandelier-lamp.webp',
      category: 'LAMP',
    },
    {
      title: 'Rustic Platform Bed',
      description: 'The rustic platform bed showcases reclaimed wood craftsmanship with natural variations in grain and texture. This eco-friendly bed brings a touch of warmth and authenticity to your bedroom decor, while its platform design eliminates the need for a box spring.',
      price: 799.99,
      stock: 7,
      imageUrl: '/images/beds/rustic-platform-bed.avif',
      category: 'BED',
    },
    {
      title: 'Mid-Century Modern Table Lamp',
      description: 'This mid-century modern table lamp features a sleek metal base and a fabric shade that diffuses light gently. Perfect for a minimalist or modern setting, it adds a stylish touch to any living room, bedroom, or office space.',
      price: 89.99,
      stock: 25,
      imageUrl: '/images/lamps/mid-century-modern-table-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'Storage Bed with Drawers',
      description: 'This bed combines function and style with built-in storage drawers that provide ample space for linens, clothes, and more. Crafted from solid wood and featuring a neutral finish, it’s a practical yet stylish addition to any bedroom.',
      price: 749.99,
      stock: 6,
      imageUrl: '/images/beds/storage-bed-drawers.avif',
      category: 'BED',
    },
    {
      title: 'Wooden Tripod Floor Lamp',
      description: 'This wooden tripod floor lamp brings a touch of rustic charm to any room. The sturdy wooden legs and fabric shade create a warm and inviting atmosphere, making it a perfect addition to a living room, bedroom, or study.',
      price: 159.99,
      stock: 17,
      imageUrl: '/images/lamps/wooden-tripod-floor-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'Velvet Tufted Bed',
      description: 'Indulge in luxury with this velvet tufted bed, featuring a high, plush headboard with deep button tufting and soft velvet upholstery. The sturdy hardwood frame ensures durability, while the elegant design adds a regal touch to your bedroom.',
      price: 999.99,
      stock: 4,
      imageUrl: '/images/beds/velvet-tufted-bed.avif',
      category: 'BED',
    },
    {
      title: 'Pendant Lamp',
      description: 'This contemporary glass orb pendant lamp adds a touch of modern elegance to your dining room or kitchen. The transparent glass shade creates a bright and airy ambiance, while the polished chrome finish enhances its sleek design.',
      price: 119.99,
      stock: 22,
      imageUrl: '/images/lamps/pendant-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'Scandinavian Wood Bed',
      description: 'Simple yet elegant, this Scandinavian-inspired wood bed features clean lines and a minimalist design. The light oak finish complements modern and traditional decor alike, while the low-profile platform ensures maximum comfort.',
      price: 579.99,
      stock: 12,
      imageUrl: '/images/beds/scandinavian-wood-bed.avif',
      category: 'BED',
    },
    {
      title: 'Lantern Lamp',
      description: 'Inspired by classic lanterns, this rustic table lamp features an antique bronze finish and clear glass panels that showcase a vintage-style bulb. Perfect for adding a cozy, old-world charm to your living room, bedroom, or entryway.',
      price: 79.99,
      stock: 20,
      imageUrl: '/images/lamps/lantern-table-lamp.avif',
      category: 'LAMP',
    },
    {
      title: 'Adjustable Swing Arm Wall Lamp',
      description: 'This wall-mounted lamp features a swing arm design that allows you to direct light exactly where you need it. Perfect for reading, working, or adding accent lighting to a room, its adjustable arm and sleek finish make it a practical and stylish choice.',
      price: 139.99,
      stock: 12,
      imageUrl: '/images/lamps/adjustable-swing-arm-wall-lamp.avif',
      category: 'LAMP',
    },
    
  ];

  // Insert data into the database
  for (const product of products) {
    await db.product.create({
      data: product,
    });
  }

  console.log('Data seeded successfully.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
