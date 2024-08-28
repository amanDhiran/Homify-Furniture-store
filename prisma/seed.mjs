import { db } from "@/lib/db";



async function main() {
  const products = [
    // SOFA Category
    {
    title: "Modern Sectional Sofa",
    description: "A large and comfortable sectional sofa with a contemporary design.",
    price: 899.99,
    imageUrl: "/images/sofas/modern-sectional.jpg",
    category: "SOFA",
    stock: 15
    },
    {
    title: "Leather Recliner Sofa",
    description: "Luxurious leather recliner sofa for maximum comfort.",
    price: 1199.99,
    imageUrl: "/images/sofas/leather-recliner.jpg",
    category: "SOFA",
    stock: 10
    },
    {
    title: "Minimalist Sofa",
    description: "A minimalist style sofa perfect for modern living spaces.",
    price: 649.99,
    imageUrl: "/images/sofas/minimalist.jpg",
    category: "SOFA",
    stock: 8
    },
    {
    title: "Convertible Sofa Bed",
    description: "A stylish sofa that easily converts into a bed.",
    price: 499.99,
    imageUrl: "/images/sofas/convertible.jpg",
    category: "SOFA",
    stock: 12
    },
    {
    title: "Fabric Loveseat",
    description: "A compact loveseat made from soft and durable fabric.",
    price: 329.99,
    imageUrl: "/images/sofas/loveseat.jpg",
    category: "SOFA",
    stock: 20
    },
    {
    title: "Chaise Lounge Sofa",
    description: "A sleek chaise lounge perfect for relaxation.",
    price: 749.99,
    imageUrl: "/images/sofas/chaise-lounge.jpg",
    category: "SOFA",
    stock: 6
    },
    {
    title: "Classic Chesterfield Sofa",
    description: "A classic Chesterfield design with deep button tufting.",
    price: 1299.99,
    imageUrl: "/images/sofas/chesterfield.jpg",
    category: "SOFA",
    stock: 7
    },
    {
    title: "Mid-Century Modern Sofa",
    description: "A mid-century modern sofa with clean lines and wooden legs.",
    price: 599.99,
    imageUrl: "/images/sofas/mid-century.jpg",
    category: "SOFA",
    stock: 18
    },
    {
    title: "Tufted Velvet Sofa",
    description: "A luxurious velvet sofa with tufted cushions.",
    price: 799.99,
    imageUrl: "/images/sofas/tufted-velvet.jpg",
    category: "SOFA",
    stock: 5
    },
    {
    title: "Sleeper Sofa with Storage",
    description: "A versatile sleeper sofa with built-in storage.",
    price: 699.99,
    imageUrl: "/images/sofas/sleeper-storage.jpg",
    category: "SOFA",
    stock: 9
    },
      
    // CHAIR Category
        {
          title: "Ergonomic Office Chair",
          description: "An ergonomic chair designed for long hours at the desk.",
          price: 249.99,
          imageUrl: "/images/chairs/ergonomic-office.jpg",
          category: "CHAIR",
          stock: 25
        },
        {
          title: "Accent Armchair",
          description: "A stylish armchair that adds character to any room.",
          price: 179.99,
          imageUrl: "/images/chairs/accent-armchair.jpg",
          category: "CHAIR",
          stock: 15
        },
        {
          title: "Rocking Chair",
          description: "A classic wooden rocking chair with a modern twist.",
          price: 199.99,
          imageUrl: "/images/chairs/rocking-chair.jpg",
          category: "CHAIR",
          stock: 10
        },
        {
          title: "Leather Recliner Chair",
          description: "A luxurious recliner chair made from premium leather.",
          price: 499.99,
          imageUrl: "/images/chairs/leather-recliner.jpg",
          category: "CHAIR",
          stock: 12
        },
        {
          title: "Dining Chair Set",
          description: "A set of 4 dining chairs with a classic design.",
          price: 349.99,
          imageUrl: "/images/chairs/dining-set.jpg",
          category: "CHAIR",
          stock: 20
        },
        {
          title: "Velvet Lounge Chair",
          description: "A soft velvet lounge chair perfect for relaxation.",
          price: 299.99,
          imageUrl: "/images/chairs/velvet-lounge.jpg",
          category: "CHAIR",
          stock: 8
        },
        {
          title: "Outdoor Patio Chair",
          description: "A weather-resistant chair for outdoor use.",
          price: 129.99,
          imageUrl: "/images/chairs/patio.jpg",
          category: "CHAIR",
          stock: 30
        },
        {
          title: "Folding Chair",
          description: "A simple and convenient folding chair for any occasion.",
          price: 49.99,
          imageUrl: "/images/chairs/folding.jpg",
          category: "CHAIR",
          stock: 50
        },
        {
          title: "Bean Bag Chair",
          description: "A cozy bean bag chair ideal for lounging.",
          price: 89.99,
          imageUrl: "/images/chairs/bean-bag.jpg",
          category: "CHAIR",
          stock: 18
        },
        {
          title: "Swivel Chair",
          description: "A comfortable swivel chair for work or leisure.",
          price: 229.99,
          imageUrl: "/images/chairs/swivel.jpg",
          category: "CHAIR",
          stock: 14
        }, 

    // BED Category
   {
        title: 'Queen Size Platform Bed',
        description: 'A sleek, modern queen-size platform bed designed with minimalistic aesthetics and functionality in mind. The bed is built with a solid wood frame and finished with a matte lacquer that offers both durability and style. The slatted base provides excellent mattress support without the need for a box spring, ensuring a low-profile look while maintaining comfort.',
        price: 599.99,
        stock: 10,
        imageUrl: '/images/beds/queen-platform-bed.jpg',
        category: 'BED',
      },
      {
        title: 'King Size Upholstered Bed',
        description: 'This luxurious king-size bed features a plush, upholstered headboard with diamond tufting, adding elegance and sophistication to any bedroom. The sturdy frame is built from solid pine wood, ensuring durability while providing ample support for your mattress. The soft fabric headboard adds comfort and a touch of glamour to your sleeping space.',
        price: 899.99,
        stock: 5,
        imageUrl: '/images/beds/king-upholstered-bed.jpg',
        category: 'BED',
      },
      {
        title: 'Twin Bunk Bed with Ladder',
        description: 'The perfect solution for shared rooms or guest accommodations, this twin bunk bed is designed to maximize space while offering comfort and safety. Made from metal, the bed is durable and stable, featuring safety rails on the top bunk and a built-in ladder for easy access.',
        price: 479.99,
        stock: 15,
        imageUrl: '/images/beds/twin-bunk-bed.jpg',
        category: 'BED',
      },
      {
        title: 'Wooden Daybed with Trundle',
        description: 'This versatile daybed is crafted from solid wood and finished in a warm walnut tone. It features a pull-out trundle bed that’s perfect for accommodating overnight guests, making it an ideal addition to a guest room, den, or kid’s room.',
        price: 649.99,
        stock: 8,
        imageUrl: '/images/beds/wooden-daybed-trundle.jpg',
        category: 'BED',
      },
      {
        title: 'Rustic Platform Bed',
        description: 'The rustic platform bed showcases reclaimed wood craftsmanship with natural variations in grain and texture. This eco-friendly bed brings a touch of warmth and authenticity to your bedroom decor, while its platform design eliminates the need for a box spring.',
        price: 799.99,
        stock: 7,
        imageUrl: '/images/beds/rustic-platform-bed.jpg',
        category: 'BED',
      },
      {
        title: 'Metal Canopy Bed',
        description: 'Elevate your bedroom with this stylish metal canopy bed, featuring a sleek design and clean lines. The open canopy allows for customization with curtains or drapes, creating a romantic and inviting atmosphere. Its durable metal construction ensures long-lasting performance.',
        price: 679.99,
        stock: 9,
        imageUrl: '/images/beds/metal-canopy-bed.jpg',
        category: 'BED',
      },
      {
        title: 'Storage Bed with Drawers',
        description: 'This bed combines function and style with built-in storage drawers that provide ample space for linens, clothes, and more. Crafted from solid wood and featuring a neutral finish, it’s a practical yet stylish addition to any bedroom.',
        price: 749.99,
        stock: 6,
        imageUrl: '/images/beds/storage-bed-drawers.jpg',
        category: 'BED',
      },
      {
        title: 'Velvet Tufted Bed',
        description: 'Indulge in luxury with this velvet tufted bed, featuring a high, plush headboard with deep button tufting and soft velvet upholstery. The sturdy hardwood frame ensures durability, while the elegant design adds a regal touch to your bedroom.',
        price: 999.99,
        stock: 4,
        imageUrl: '/images/beds/velvet-tufted-bed.jpg',
        category: 'BED',
      },
      {
        title: 'Scandinavian Wood Bed',
        description: 'Simple yet elegant, this Scandinavian-inspired wood bed features clean lines and a minimalist design. The light oak finish complements modern and traditional decor alike, while the low-profile platform ensures maximum comfort.',
        price: 579.99,
        stock: 12,
        imageUrl: '/images/beds/scandinavian-wood-bed.jpg',
        category: 'BED',
      },
      {
        title: 'Adjustable Bed with Massage',
        description: 'Upgrade your sleep with this adjustable bed that offers customizable head and foot positions along with a built-in massage feature. Perfect for reading, watching TV, or simply relaxing, this bed is equipped with a remote control for effortless adjustments.',
        price: 1299.99,
        stock: 3,
        imageUrl: '/images/beds/adjustable-bed-massage.jpg',
        category: 'BED',
      },

    // LAMP Category
    {
        title: 'Modern Arc Floor Lamp',
        description: 'This elegant arc floor lamp features a sleek, curved design that adds a touch of sophistication to any room. The adjustable arm allows for targeted lighting, making it ideal for living rooms, reading nooks, or bedrooms. The contemporary style complements both modern and traditional decor.',
        price: 169.99,
        stock: 20,
        imageUrl: '/images/lamps/modern-arc-floor-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Vintage Brass Table Lamp',
        description: 'Crafted with a vintage brass finish and a classic silhouette, this table lamp brings timeless elegance to any space. The fabric lampshade diffuses light softly, creating a warm and inviting atmosphere in your living room, bedroom, or study.',
        price: 129.99,
        stock: 18,
        imageUrl: '/images/lamps/vintage-brass-table-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Industrial Pipe Desk Lamp',
        description: 'Inspired by industrial design, this unique desk lamp features exposed pipe detailing and an Edison bulb, creating a rustic yet modern aesthetic. Ideal for workspaces, it adds character and functional lighting to your desk or side table.',
        price: 99.99,
        stock: 15,
        imageUrl: '/images/lamps/industrial-pipe-desk-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Crystal Chandelier Lamp',
        description: 'Add a touch of luxury to your space with this stunning crystal chandelier lamp. The cascading crystals catch and reflect light beautifully, creating an eye-catching display. Perfect for dining rooms, bedrooms, or entryways, this lamp is a statement piece that exudes elegance.',
        price: 229.99,
        stock: 10,
        imageUrl: '/images/lamps/crystal-chandelier-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Mid-Century Modern Table Lamp',
        description: 'This mid-century modern table lamp features a sleek metal base and a fabric shade that diffuses light gently. Perfect for a minimalist or modern setting, it adds a stylish touch to any living room, bedroom, or office space.',
        price: 89.99,
        stock: 25,
        imageUrl: '/images/lamps/mid-century-modern-table-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Wooden Tripod Floor Lamp',
        description: 'This wooden tripod floor lamp brings a touch of rustic charm to any room. The sturdy wooden legs and fabric shade create a warm and inviting atmosphere, making it a perfect addition to a living room, bedroom, or study.',
        price: 159.99,
        stock: 17,
        imageUrl: '/images/lamps/wooden-tripod-floor-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Glass Orb Pendant Lamp',
        description: 'This contemporary glass orb pendant lamp adds a touch of modern elegance to your dining room or kitchen. The transparent glass shade creates a bright and airy ambiance, while the polished chrome finish enhances its sleek design.',
        price: 119.99,
        stock: 22,
        imageUrl: '/images/lamps/glass-orb-pendant-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Rustic Lantern Table Lamp',
        description: 'Inspired by classic lanterns, this rustic table lamp features an antique bronze finish and clear glass panels that showcase a vintage-style bulb. Perfect for adding a cozy, old-world charm to your living room, bedroom, or entryway.',
        price: 79.99,
        stock: 20,
        imageUrl: '/images/lamps/rustic-lantern-table-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Ceramic Base Table Lamp',
        description: 'This ceramic base table lamp features a textured ceramic base with a fabric shade, offering a unique blend of modern and rustic elements. The neutral color palette complements a variety of decor styles, making it a versatile addition to your home.',
        price: 69.99,
        stock: 30,
        imageUrl: '/images/lamps/ceramic-base-table-lamp.jpg',
        category: 'LAMP',
      },
      {
        title: 'Adjustable Swing Arm Wall Lamp',
        description: 'This wall-mounted lamp features a swing arm design that allows you to direct light exactly where you need it. Perfect for reading, working, or adding accent lighting to a room, its adjustable arm and sleek finish make it a practical and stylish choice.',
        price: 139.99,
        stock: 12,
        imageUrl: '/images/lamps/adjustable-swing-arm-wall-lamp.jpg',
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
