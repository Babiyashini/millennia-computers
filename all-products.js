// all-products.js - Contains all 141 products in one file

// Laptops (33 products)
const laptops = [
    {
        id: 1,
        category: "laptops",
        name: "ASUS ROG Strix G16 Gaming Laptop",
        price: "Rs. 429,999",
        rating: "★★★★★",
        reviews: "94 Reviews",
        image: "images/Laptops/asus-rog-strix-g16.png",
        keyFeatures: [
            "ROG Intelligent Cooling with liquid metal",
            "Keystone 3 for personalized settings",
            "Dolby Vision Atmos support",
            "MUX Switch with NVIDIA Advanced Optimus"
        ],
        specs: [
            "Processor: Intel Core i9-13980HX",
            "RAM: 32GB DDR5",
            "Storage: 1TB NVMe SSD",
            "Graphics: NVIDIA RTX 4070",
            "Display: 16\" QHD+ 240Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 2,
        category: "laptops",
        name: "Lenovo Legion 5 Pro",
        price: "Rs. 359,999",
        rating: "★★★★★",
        reviews: "217 Reviews",
        image: "images/Laptops/lenovo-legion-5-pro.png",
        keyFeatures: [
            "16:10 IPS display with 100% sRGB",
            "Nahimic Audio for 3D sound",
            "Legion ColdFront 5.0 cooling",
            "Full-size RGB keyboard"
        ],
        specs: [
            "Processor: AMD Ryzen 7 7745HX",
            "RAM: 16GB DDR5",
            "Storage: 1TB NVMe SSD",
            "Graphics: NVIDIA RTX 4060",
            "Display: 16\" WQXGA 165Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 3,
        category: "laptops",
        name: "Acer Nitro 5",
        price: "Rs. 249,999",
        rating: "★★★★☆",
        reviews: "185 Reviews",
        image: "images/Laptops/acer-nitro-5.png",
        keyFeatures: [
            "NitroSense utility for performance control",
            "Dual-fan cooling system",
            "4-zone RGB keyboard",
            "Killer Ethernet E2600"
        ],
        specs: [
            "Processor: Intel Core i5-12500H",
            "RAM: 16GB DDR4",
            "Storage: 512GB NVMe SSD",
            "Graphics: NVIDIA RTX 4050",
            "Display: 15.6\" FHD 144Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 4,
        category: "laptops",
        name: "ASUS TUF Gaming F15",
        price: "Rs. 289,999",
        rating: "★★★★☆",
        reviews: "175 Reviews",
        image: "images/Laptops/asus-tuf-gaming-f15.png",
        keyFeatures: [
            "Military-grade durability (MIL-STD-810H)",
            "Dual self-cleaning cooling fans",
            "RGB backlit keyboard",
            "Adaptive-Sync display"
        ],
        specs: [
            "Processor: Intel Core i7-12700H",
            "RAM: 16GB DDR5",
            "Storage: 1TB SSD",
            "Graphics: NVIDIA RTX 4060",
            "Display: 15.6\" FHD 144Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 5,
        category: "laptops",
        name: "HP Omen 16",
        price: "Rs. 319,999",
        rating: "★★★★★",
        reviews: "192 Reviews",
        image: "images/Laptops/hp-omen-16.png",
        keyFeatures: [
            "OMEN Tempest Cooling technology",
            "Bang & Olufsen speakers",
            "Customizable RGB lighting",
            "1440p QHD display"
        ],
        specs: [
            "Processor: Intel Core i7-13700HX",
            "RAM: 32GB DDR5",
            "Storage: 1TB NVMe SSD",
            "Graphics: NVIDIA RTX 4070",
            "Display: 16.1\" QHD 165Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 6,
        category: "laptops",
        name: "MSI Katana 17",
        price: "Rs. 274,999",
        rating: "★★★★☆",
        reviews: "98 Reviews",
        image: "images/Laptops/msi-katana-17.png",
        keyFeatures: [
            "Cooler Boost 5 Thermal System",
            "MSI Center for customization",
            "Per-Key RGB Keyboard",
            "Hi-Res Audio with Nahimic 3"
        ],
        specs: [
            "Processor: Intel Core i7-13620H",
            "RAM: 16GB DDR5",
            "Storage: 1TB NVMe SSD",
            "Graphics: NVIDIA RTX 4060",
            "Display: 17.3\" FHD 144Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 7,
        category: "laptops",
        name: "Dell G15 5530",
        price: "Rs. 229,999",
        rating: "★★★★☆",
        reviews: "121 Reviews",
        image: "images/Laptops/dell-g15-5530.png",
        keyFeatures: [
            "Alienware-inspired thermal design",
            "G-mode instant performance boost",
            "Dolby Audio for immersive sound",
            "15-color RGB keyboard"
        ],
        specs: [
            "Processor: Intel Core i5-13450HX",
            "RAM: 16GB DDR5",
            "Storage: 512GB NVMe SSD",
            "Graphics: NVIDIA RTX 4050",
            "Display: 15.6\" FHD 165Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 8,
        category: "laptops",
        name: "ASUS ROG Zephyrus G14",
        price: "Rs. 720,000",
        rating: "★★★★★",
        reviews: "Premium Gaming",
        image: "images/Laptops/asus-rog-zephyrus-g14.png",
        keyFeatures: [
            "Compact 14-inch chassis",
            "High-resolution Nebula Display",
            "Vapor chamber cooling system",
            "Dolby Atmos audio"
        ],
        specs: [
            "Graphics: NVIDIA RTX 4070",
            "Processor: AMD Ryzen 9",
            "Display: 14\" QHD 165Hz+",
            "Premium portable gaming"
        ]
    },
    {
        id: 9,
        category: "laptops",
        name: "ASUS ROG Zephyrus G16",
        price: "Rs. 890,000",
        rating: "★★★★★",
        reviews: "Ultimate Performance",
        image: "images/Laptops/asus-rog-zephyrus-g16.png",
        keyFeatures: [
            "16-inch Nebula Display",
            "Advanced ROG Intelligent Cooling",
            "MUX Switch with NVIDIA Advanced Optimus",
            "Slim and premium chassis design"
        ],
        specs: [
            "Graphics: NVIDIA RTX 4080",
            "Processor: Intel Core i9",
            "Display: 16\" QHD+ 240Hz",
            "Top-tier gaming performance"
        ]
    },
    {
        id: 10,
        category: "laptops",
        name: "Razer Blade 16",
        price: "Rs. 1,350,000",
        rating: "★★★★★",
        reviews: "Premium Gaming",
        image: "images/Laptops/razer-blade-16.png",
        keyFeatures: [
            "Dual-Mode Mini-LED Display",
            "NVIDIA GeForce RTX 4090",
            "CNC-milled aluminum chassis",
            "Per-key Razer Chroma RGB"
        ],
        specs: [
            "Graphics: NVIDIA RTX 4090",
            "Display: UHD+ 120Hz & FHD+ 240Hz",
            "Premium build quality",
            "Desktop-class performance"
        ]
    },
    {
        id: 11,
        category: "laptops",
        name: "Acer Predator Helios 16",
        price: "Rs. 640,000",
        rating: "★★★★★",
        reviews: "High Performance",
        image: "images/Laptops/acer-predator-helios-16.png",
        keyFeatures: [
            "Advanced cooling with liquid metal",
            "5th Gen AeroBlade 3D fans",
            "Per-key RGB keyboard",
            "Mini-LED display options"
        ],
        specs: [
            "Processor: Intel Core i7/i9 HX-series",
            "Graphics: NVIDIA RTX 40-Series",
            "Display: 16\" QHD+ 165Hz/240Hz",
            "High-performance gaming"
        ]
    },
    {
        id: 12,
        category: "laptops",
        name: "ASUS TUF Gaming A15",
        price: "Rs. 420,000",
        rating: "★★★★☆",
        reviews: "Value Gaming",
        image: "images/Laptops/asus-tuf-gaming-a15.png",
        keyFeatures: [
            "Military-grade durability",
            "MUX Switch with NVIDIA Advanced Optimus",
            "High refresh rate display",
            "Upgradable RAM and storage"
        ],
        specs: [
            "Processor: AMD Ryzen 7/9",
            "Graphics: NVIDIA RTX 4050",
            "Display: 15.6\" FHD 144Hz",
            "Durable gaming laptop"
        ]
    },
    {
        id: 13,
        category: "laptops",
        name: "Acer Nitro 5 (RTX 3050)",
        price: "Rs. 330,000",
        rating: "★★★★☆",
        reviews: "Budget Gaming",
        image: "images/Laptops/acer-nitro-5-rtx3050.png",
        keyFeatures: [
            "Acer CoolBoost technology",
            "RGB keyboard (4-zone)",
            "Good value for entry-level gaming",
            "Reliable performance"
        ],
        specs: [
            "Processor: Intel Core i5/i7",
            "Graphics: NVIDIA RTX 3050/Ti",
            "Display: 15.6\" FHD 144Hz",
            "Entry-level gaming"
        ]
    },
    {
        id: 14,
        category: "laptops",
        name: "Gigabyte G5 Gaming Laptop",
        price: "Rs. 310,000",
        rating: "★★★★☆",
        reviews: "Value Performance",
        image: "images/Laptops/gigabyte-g5.png",
        keyFeatures: [
            "Good price-to-performance ratio",
            "WINDFORCE cooling system",
            "High refresh rate display",
            "Supports three external displays"
        ],
        specs: [
            "Processor: Intel Core i5/i7",
            "RAM: 16GB RAM",
            "Storage: 512GB/1TB SSD",
            "Graphics: NVIDIA RTX 4060",
            "Display: 15.6\" FHD 144Hz"
        ]
    },
    {
        id: 15,
        category: "laptops",
        name: "Dell Inspiron 15",
        price: "Rs. 149,999",
        rating: "★★★★☆",
        reviews: "310 Reviews",
        image: "images/Laptops/dell-inspiron-15.png",
        keyFeatures: [
            "1080p Webcam with Noise Reduction",
            "Long-lasting battery life",
            "Comfortable full-size keyboard",
            "Dell Mobile Connect"
        ],
        specs: [
            "Processor: Intel Core i5-1235U",
            "RAM: 8GB DDR4",
            "Storage: 512GB SSD",
            "Graphics: Intel Iris Xe",
            "Display: 15.6\" FHD 60Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 16,
        category: "laptops",
        name: "HP 15s Laptop",
        price: "Rs. 114,999",
        rating: "★★★★☆",
        reviews: "422 Reviews",
        image: "images/Laptops/hp-15s.png",
        keyFeatures: [
            "Fast charge technology",
            "Micro-edge bezel display",
            "HP Audio Boost",
            "Essential for home and office"
        ],
        specs: [
            "Processor: AMD Ryzen 5 5500U",
            "RAM: 8GB DDR4",
            "Storage: 256GB SSD",
            "Graphics: AMD Radeon Graphics",
            "Display: 15.6\" HD Micro-edge",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 17,
        category: "laptops",
        name: "Lenovo IdeaPad Slim 5",
        price: "Rs. 164,999",
        rating: "★★★★☆",
        reviews: "246 Reviews",
        image: "images/Laptops/lenovo-ideapad-slim-5.png",
        keyFeatures: [
            "Fingerprint power button",
            "Aluminum chassis",
            "Rapid charge support",
            "Dolby Audio speakers"
        ],
        specs: [
            "Processor: AMD Ryzen 7 7730U",
            "RAM: 16GB DDR4",
            "Storage: 512GB SSD",
            "Graphics: AMD Radeon Graphics",
            "Display: 15.6\" FHD IPS",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 18,
        category: "laptops",
        name: "Acer Aspire 5",
        price: "Rs. 134,999",
        rating: "★★★★☆",
        reviews: "298 Reviews",
        image: "images/Laptops/acer-aspire-5.png",
        keyFeatures: [
            "Acer BlueLightShield",
            "Wi-Fi 6 connectivity",
            "Backlit keyboard",
            "All-day battery life"
        ],
        specs: [
            "Processor: AMD Ryzen 5 5625U",
            "RAM: 8GB DDR4",
            "Storage: 512GB SSD",
            "Graphics: AMD Radeon Graphics",
            "Display: 15.6\" FHD IPS",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 19,
        category: "laptops",
        name: "ASUS Vivobook Go 15",
        price: "Rs. 100,000",
        rating: "★★★★☆",
        reviews: "334 Reviews",
        image: "images/Laptops/asus-vivobook-go-15.png",
        keyFeatures: [
            "Sleek 1.99 cm thin design",
            "Up to 10 hours battery life",
            "ASUS Antimicrobial Guard",
            "Full-size keyboard with numeric keypad"
        ],
        specs: [
            "Processor: AMD Ryzen 3 7320U",
            "RAM: 8GB LPDDR5",
            "Storage: 256GB NVMe SSD",
            "Graphics: AMD Radeon 610M",
            "Display: 15.6\" FHD 60Hz",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 20,
        category: "laptops",
        name: "Lenovo V15 Gen 4",
        price: "Rs. 124,999",
        rating: "★★★★☆",
        reviews: "287 Reviews",
        image: "images/Laptops/lenovo-v15-gen4.jpg.png",
        keyFeatures: [
            "Physical webcam shutter for privacy",
            "Military-grade durability tests",
            "Rapid Charge technology",
            "Dedicated number pad"
        ],
        specs: [
            "Processor: Intel Core i3-1215U",
            "RAM: 8GB DDR4",
            "Storage: 512GB SSD",
            "Graphics: Intel UHD Graphics",
            "Display: 15.6\" FHD TN",
            "OS: Windows 11 Home"
        ]
    },
    {
        id: 21,
        category: "laptops",
        name: "Apple MacBook Pro 14\" M3 Pro",
        price: "Rs. 850,000",
        rating: "★★★★★",
        reviews: "Professional Grade",
        image: "images/Laptops/apple-macbook-pro-14-m3.png",
        keyFeatures: [
            "Up to 18 hours of battery life",
            "Advanced thermal system",
            "Studio-quality mics and speakers",
            "Thunderbolt 4, HDMI, SDXC card slot"
        ],
        specs: [
            "Processor: Apple M3 Pro",
            "Display: 14.2\" Liquid Retina XDR",
            "Professional performance",
            "Premium creative workstation"
        ]
    },
    {
        id: 22,
        category: "laptops",
        name: "Apple MacBook Air 15\" M3",
        price: "Rs. 620,000",
        rating: "★★★★★",
        reviews: "Ultra Portable",
        image: "images/Laptops/apple-macbook-air-15-m3.png",
        keyFeatures: [
            "Up to 18 hours of battery life",
            "Fanless design for silent operation",
            "MagSafe 3 charging port",
            "Six-speaker sound system"
        ],
        specs: [
            "Processor: Apple M3",
            "Display: 15.3\" Liquid Retina",
            "Ultra-thin and light",
            "All-day performance"
        ]
    },
    {
        id: 23,
        category: "laptops",
        name: "Apple MacBook Air 13\" M2",
        price: "Rs. 480,000",
        rating: "★★★★★",
        reviews: "Popular Choice",
        image: "images/Laptops/apple-macbook-air-13-m2.png",
        keyFeatures: [
            "Apple M2 Chip performance",
            "MagSafe 3 charging",
            "Fanless design",
            "Up to 18 hours battery life"
        ],
        specs: [
            "Processor: Apple M2",
            "Display: 13.6\" Liquid Retina",
            "Ultraportable design",
            "Efficient performance"
        ]
    },
    {
        id: 24,
        category: "laptops",
        name: "Dell XPS 15",
        price: "Rs. 780,000",
        rating: "★★★★★",
        reviews: "Premium Performance",
        image: "images/Laptops/dell-xps-15.png",
        keyFeatures: [
            "Premium machined aluminum chassis",
            "Large glass touchpad",
            "Quad-speaker design",
            "Stunning InfinityEdge display"
        ],
        specs: [
            "Processor: Intel Core i7/i9 H-series",
            "Graphics: NVIDIA RTX 4060",
            "Display: 15.6\" InfinityEdge OLED/IPS",
            "Content creation powerhouse"
        ]
    },
    {
        id: 25,
        category: "laptops",
        name: "Dell XPS 13",
        price: "Rs. 610,000",
        rating: "★★★★★",
        reviews: "Ultra Premium",
        image: "images/Laptops/dell-xps-13.png",
        keyFeatures: [
            "Extremely thin and light aluminum chassis",
            "Seamless haptic touchpad",
            "AI features for optimization",
            "Compact premium design"
        ],
        specs: [
            "Processor: Intel Core Ultra 7",
            "Graphics: Intel Arc graphics",
            "Display: 13.4\" InfinityEdge",
            "AI-powered performance"
        ]
    },
    {
        id: 26,
        category: "laptops",
        name: "HP Spectre x360 14",
        price: "Rs. 590,000",
        rating: "★★★★★",
        reviews: "2-in-1 Premium",
        image: "images/Laptops/hp-spectre-x360-14.png",
        keyFeatures: [
            "360-degree hinge versatility",
            "Haptic touchpad",
            "High-resolution webcam with AI",
            "Sleek aluminum chassis"
        ],
        specs: [
            "Processor: Intel Core Ultra 5/7",
            "Display: 14\" OLED touch display (2.8K)",
            "Convertible design",
            "Premium build quality"
        ]
    },
    {
        id: 27,
        category: "laptops",
        name: "Lenovo Yoga 9i 2-in-1",
        price: "Rs. 630,000",
        rating: "★★★★★",
        reviews: "Premium Convertible",
        image: "images/Laptops/lenovo-yoga-9i.png",
        keyFeatures: [
            "Bowers & Wilkins rotating soundbar",
            "Premium aluminum unibody design",
            "Included Lenovo Slim Pen",
            "Versatile 2-in-1 functionality"
        ],
        specs: [
            "Processor: Intel Core Ultra",
            "Display: 14\" OLED PureSight",
            "Rotating soundbar hinge",
            "Premium convertible"
        ]
    },
    {
        id: 28,
        category: "laptops",
        name: "Microsoft Surface Laptop 5",
        price: "Rs. 430,000",
        rating: "★★★★☆",
        reviews: "Productivity Focused",
        image: "images/Laptops/microsoft-surface-laptop-5.png",
        keyFeatures: [
            "Signature Alcantara or metal palm rest",
            "All-day battery life",
            "Thunderbolt 4 port",
            "Excellent keyboard"
        ],
        specs: [
            "Processor: 12th Gen Intel Core i5/i7",
            "Display: 13.5\" or 15\" PixelSense",
            "Windows optimized",
            "Productivity focused"
        ]
    },
    {
        id: 29,
        category: "laptops",
        name: "Lenovo IdeaPad Slim 3",
        price: "Rs. 180,000",
        rating: "★★★★☆",
        reviews: "Everyday Essential",
        image: "images/Laptops/lenovo-ideapad-slim-3.png",
        keyFeatures: [
            "Lightweight design",
            "Physical webcam privacy shutter",
            "Fast charging support",
            "Essential everyday laptop"
        ],
        specs: [
            "Processor: Intel Core i3/i5 or AMD Ryzen 3/5",
            "Display: 15.6\" FHD",
            "Portable and reliable",
            "Value performance"
        ]
    },
    {
        id: 30,
        category: "laptops",
        name: "HP Pavilion 15",
        price: "Rs. 230,000",
        rating: "★★★★☆",
        reviews: "Balanced Performance",
        image: "images/Laptops/hp-pavilion-15.png",
        keyFeatures: [
            "B&O tuned audio",
            "Full-size keyboard with numeric keypad",
            "HP Fast Charge capable",
            "Versatile mid-range option"
        ],
        specs: [
            "Processor: Intel Core i5/i7 or AMD Ryzen 5/7",
            "Display: 15.6\" FHD IPS",
            "Well-rounded features",
            "Home and student use"
        ]
    },
    {
        id: 31,
        category: "laptops",
        name: "Lenovo ThinkPad X1 Carbon Gen 11",
        price: "Rs. 720,000",
        rating: "★★★★★",
        reviews: "Business Elite",
        image: "images/Laptops/lenovo-thinkpad-x1-carbon.png",
        keyFeatures: [
            "Extremely lightweight carbon fiber chassis",
            "MIL-STD 810H tested durability",
            "ThinkShutter webcam privacy",
            "Excellent ThinkPad keyboard"
        ],
        specs: [
            "Processor: 13th Gen Intel Core i5/i7",
            "Display: 14\" OLED option",
            "Business security features",
            "Mobile professional grade"
        ]
    },
    {
        id: 32,
        category: "laptops",
        name: "MSI Modern 14",
        price: "Rs. 195,000",
        rating: "★★★★☆",
        reviews: "Portable Productivity",
        image: "images/Laptops/msi-modern-14.png",
        keyFeatures: [
            "Lightweight chassis (<1.4kg)",
            "Good battery life",
            "Thin bezels",
            "MIL-STD-810G durability"
        ],
        specs: [
            "Processor: AMD Ryzen 5",
            "RAM: 8GB/16GB RAM",
            "Storage: 512GB NVMe SSD",
            "Display: 14\" FHD IPS"
        ]
    },
    {
        id: 33,
        category: "laptops",
        name: "Framework Laptop 13",
        price: "Rs. 400,000",
        rating: "★★★★☆",
        reviews: "Modular Innovation",
        image: "images/Laptops/framework-laptop-13.png",
        keyFeatures: [
            "Extreme repairability/upgradability",
            "Customizable expansion card system",
            "Focus on sustainability",
            "Open-source firmware options"
        ],
        specs: [
            "Processor: Intel Core or AMD Ryzen 7040",
            "Display: 13.5\" 2256x1504 (3:2)",
            "User-selected ports",
            "Modular and sustainable"
        ]
    }
];
const smartphones = [
    {
        id: 34,
        category: "smartphones",
        name: "Samsung Galaxy S24 Ultra",
        price: "Rs. 349,999",
        rating: "★★★★★",
        reviews: "88 Reviews",
        image: "images/Smartphones/samsung-galaxy-s24-ultra.png",
        keyFeatures: [
            "Built-in S Pen",
            "Titanium frame",
            "100x Space Zoom",
            "7 years of OS upgrades"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 3",
            "RAM: 12GB",
            "Storage: 512GB",
            "Display: 6.8\" Dynamic AMOLED 2X",
            "Camera: 200MP Main + 50MP Periscope",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 35,
        category: "smartphones",
        name: "Apple iPhone 15 Pro Max",
        price: "Rs. 389,999",
        rating: "★★★★★",
        reviews: "124 Reviews",
        image: "images/Smartphones/apple-iphone-15-pro-max.png",
        keyFeatures: [
            "Action button for quick tasks",
            "5x Telephoto camera",
            "USB-C with USB 3 speeds",
            "iOS ecosystem integration"
        ],
        specs: [
            "Chipset: Apple A17 Pro",
            "RAM: 8GB",
            "Storage: 256GB",
            "Display: 6.7\" Super Retina XDR",
            "Camera: 48MP Main + 12MP Telephoto",
            "Battery: 4,422mAh"
        ]
    },
    {
        id: 36,
        category: "smartphones",
        name: "Google Pixel 8 Pro",
        price: "Rs. 279,999",
        rating: "★★★★★",
        reviews: "67 Reviews",
        image: "images/Smartphones/google-pixel-8-pro.png",
        keyFeatures: [
            "Pro-level video and photo tools",
            "7 years of software support",
            "Super Actua always-on display",
            "Google AI core features"
        ],
        specs: [
            "Chipset: Google Tensor G3",
            "RAM: 12GB",
            "Storage: 256GB",
            "Display: 6.7\" Super Actua Display",
            "Camera: 50MP Main + 48MP Telephoto",
            "Battery: 5,050mAh"
        ]
    },
    {
        id: 37,
        category: "smartphones",
        name: "iPhone 17 Pro",
        price: "Rs. 419,999",
        rating: "★★★★★",
        reviews: "94 Reviews",
        image: "images/Smartphones/iphone-17-pro.png",
        keyFeatures: [
            "Dynamic Island 2.0",
            "Advanced computational photography",
            "7 years of iOS updates",
            "USB-C fast charging"
        ],
        specs: [
            "Chipset: Apple A18 Pro",
            "RAM: 8GB",
            "Storage: 512GB",
            "Display: 6.7\" Super Retina XDR",
            "Camera: 48MP Main + 12MP Telephoto",
            "Battery: 4,500mAh"
        ]
    },
    {
        id: 38,
        category: "smartphones",
        name: "Samsung Galaxy S25 Ultra",
        price: "Rs. 369,999",
        rating: "★★★★★",
        reviews: "110 Reviews",
        image: "images/Smartphones/samsung-galaxy-s25-ultra.png",
        keyFeatures: [
            "AI Zoom optimization",
            "S Pen support",
            "Armor Aluminum frame",
            "IP68 water resistance"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 4",
            "RAM: 16GB",
            "Storage: 512GB",
            "Display: 6.8\" AMOLED 2X 120Hz",
            "Camera: 200MP Main + 10x Optical Zoom",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 39,
        category: "smartphones",
        name: "OnePlus 13",
        price: "Rs. 299,999",
        rating: "★★★★★",
        reviews: "76 Reviews",
        image: "images/Smartphones/oneplus-13.png",
        keyFeatures: [
            "100W SUPERVOOC fast charging",
            "Alert Slider 2.0",
            "OxygenOS with 5 years of updates",
            "Hasselblad-tuned camera system"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 4",
            "RAM: 16GB LPDDR5X",
            "Storage: 512GB UFS 4.0",
            "Display: 6.82\" 2K 120Hz LTPO AMOLED",
            "Camera: 50MP LYTIA Main + 64MP Periscope",
            "Battery: 5,500mAh"
        ]
    },
    {
        id: 40,
        category: "smartphones",
        name: "Xiaomi 14 Ultra",
        price: "Rs. 339,999",
        rating: "★★★★★",
        reviews: "81 Reviews",
        image: "images/Smartphones/xiaomi-14-ultra.png",
        keyFeatures: [
            "Leica Summilux lenses",
            "Professional photography kit support",
            "Dual-sided Dragon Armor glass",
            "90W HyperCharge"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 3",
            "RAM: 16GB",
            "Storage: 512GB",
            "Display: 6.73\" C8 AMOLED 120Hz",
            "Camera: 50MP Main (1-inch) + 50MP Telephoto",
            "Battery: 5,300mAh"
        ]
    },
    {
        id: 41,
        category: "smartphones",
        name: "Apple iPhone 16 Pro Max",
        price: "Rs. 390,000",
        rating: "★★★★★",
        reviews: "Latest Flagship",
        image: "images/Smartphones/apple-iphone-16-pro-max.png",
        keyFeatures: [
            "Larger display",
            "Upgraded camera system",
            "Wi-Fi 7 support",
            "New Capture button"
        ],
        specs: [
            "Chipset: A18 Pro",
            "Display: ~6.9 inches",
            "Enhanced telephoto camera",
            "Premium flagship features"
        ]
    },
    {
        id: 42,
        category: "smartphones",
        name: "Apple iPhone 16",
        price: "Rs. 375,000",
        rating: "★★★★☆",
        reviews: "Standard Model",
        image: "images/Smartphones/apple-iphone-16.png",
        keyFeatures: [
            "Action Button",
            "Vertically stacked camera layout",
            "New Capture button",
            "iOS ecosystem"
        ],
        specs: [
            "Chipset: A17 Bionic",
            "Standard iPhone features",
            "Balanced performance",
            "Modern design"
        ]
    },
    {
        id: 43,
        category: "smartphones",
        name: "Apple iPhone 15",
        price: "Rs. 340,000",
        rating: "★★★★☆",
        reviews: "Current Standard",
        image: "images/Smartphones/apple-iphone-15.png",
        keyFeatures: [
            "Dynamic Island interface",
            "48MP Main camera with 2x Telephoto",
            "USB-C port",
            "Colour-infused back glass"
        ],
        specs: [
            "Chipset: A16 Bionic",
            "Camera: 48MP Main",
            "Port: USB-C",
            "Modern iPhone experience"
        ]
    },
    {
        id: 44,
        category: "smartphones",
        name: "Samsung Galaxy S25",
        price: "Rs. 380,000",
        rating: "★★★★★",
        reviews: "Standard Flagship",
        image: "images/Smartphones/samsung-galaxy-s25.png",
        keyFeatures: [
            "Enhanced Galaxy AI features",
            "Improved camera sensors",
            "Display brightness upgrades",
            "Latest Samsung experience"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 4 / New Exynos",
            "Standard flagship features",
            "AI enhancements",
            "Premium build quality"
        ]
    },
    {
        id: 45,
        category: "smartphones",
        name: "Samsung Galaxy Z Fold 6",
        price: "Rs. 610,000",
        rating: "★★★★★",
        reviews: "Premium Foldable",
        image: "images/Smartphones/samsung-galaxy-z-fold-6.png",
        keyFeatures: [
            "Thinner and lighter design",
            "Wider cover screen",
            "Improved hinge durability",
            "Enhanced S Pen integration"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 3 for Galaxy",
            "Large format foldable",
            "Premium multitasking",
            "Innovative design"
        ]
    },
    {
        id: 46,
        category: "smartphones",
        name: "Samsung Galaxy Z Flip 6",
        price: "Rs. 420,000",
        rating: "★★★★☆",
        reviews: "Compact Foldable",
        image: "images/Smartphones/samsung-galaxy-z-flip-6.png",
        keyFeatures: [
            "Larger cover display (Flex Window)",
            "Larger battery capacity",
            "Improved hinge durability",
            "Compact clamshell design"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 3 for Galaxy",
            "Camera: Upgraded sensor (50MP)",
            "Compact foldable",
            "Modern flip phone"
        ]
    },
    {
        id: 47,
        category: "smartphones",
        name: "Google Pixel 9 Pro",
        price: "Rs. 390,000",
        rating: "★★★★★",
        reviews: "AI Flagship",
        image: "images/Smartphones/google-pixel-9-pro.png",
        keyFeatures: [
            "Advanced AI features (on-device)",
            "Redesigned camera bar",
            "Satellite connectivity",
            "Temperature sensor"
        ],
        specs: [
            "Chipset: Google Tensor G4",
            "Pro-level AI capabilities",
            "Advanced camera system",
            "Premium Google experience"
        ]
    },
    {
        id: 48,
        category: "smartphones",
        name: "Google Pixel 9",
        price: "Rs. 310,000",
        rating: "★★★★☆",
        reviews: "Standard AI Phone",
        image: "images/Smartphones/google-pixel-9.png",
        keyFeatures: [
            "Core AI features from Pro model",
            "Dual rear camera system",
            "Refined flat-edge design",
            "Google software excellence"
        ],
        specs: [
            "Chipset: Google Tensor G4",
            "Standard Pixel features",
            "AI-powered experience",
            "Clean Android"
        ]
    },
    {
        id: 49,
        category: "smartphones",
        name: "Nothing Phone (3)",
        price: "Rs. 240,000",
        rating: "★★★★☆",
        reviews: "Unique Design",
        image: "images/Smartphones/nothing-phone-3.png",
        keyFeatures: [
            "Updated Glyph Interface",
            "Improved camera performance",
            "Refined Nothing OS",
            "Transparent design elements"
        ],
        specs: [
            "Processor: Upgraded Qualcomm Snapdragon",
            "Unique design philosophy",
            "Glyph interface enhancements",
            "Modern smartphone experience"
        ]
    },
    {
        id: 50,
        category: "smartphones",
        name: "ASUS ROG Phone 8",
        price: "Rs. 350,000",
        rating: "★★★★★",
        reviews: "Gaming Powerhouse",
        image: "images/Smartphones/asus-rog-phone-8.png",
        keyFeatures: [
            "AirTrigger shoulder buttons",
            "High-performance X Mode",
            "GameCool 8 thermal system",
            "Bypass charging"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 3",
            "Display: 165Hz AMOLED",
            "Gaming-focused features",
            "Advanced cooling system"
        ]
    },
    {
        id: 51,
        category: "smartphones",
        name: "Sony Xperia 1 VI",
        price: "Rs. 490,000",
        rating: "★★★★★",
        reviews: "Pro Photography",
        image: "images/Smartphones/sony-xperia-1-vi.png",
        keyFeatures: [
            "Pro-level camera system with ZEISS",
            "Dedicated shutter button",
            "Advanced video recording features",
            "Front-facing stereo speakers"
        ],
        specs: [
            "Chipset: Snapdragon 8 Gen 3",
            "Display: 4K HDR OLED",
            "Camera: Pro-level system with ZEISS optics",
            "Professional audio features"
        ]
    },
    {
        id: 52,
        category: "smartphones",
        name: "Xiaomi Redmi Note 13",
        price: "Rs. 64,999",
        rating: "★★★★☆",
        reviews: "556 Reviews",
        image: "images/Smartphones/xiaomi-redmi-note-13.png",
        keyFeatures: [
            "108MP pro-grade main camera",
            "Corning Gorilla Glass 5",
            "33W fast charging",
            "IP54 dust and splash resistant"
        ],
        specs: [
            "Chipset: Snapdragon 685",
            "RAM: 8GB",
            "Storage: 256GB",
            "Display: 6.67\" FHD+ AMOLED 120Hz",
            "Camera: 108MP Main",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 53,
        category: "smartphones",
        name: "Samsung Galaxy A15 5G",
        price: "Rs. 54,999",
        rating: "★★★★☆",
        reviews: "489 Reviews",
        image: "images/Smartphones/samsung-galaxy-a15-5g.png",
        keyFeatures: [
            "Super AMOLED display",
            "25W Fast Charging",
            "4 years of security updates",
            "Expandable storage"
        ],
        specs: [
            "Chipset: MediaTek Dimensity 6100+",
            "RAM: 6GB",
            "Storage: 128GB",
            "Display: 6.5\" Super AMOLED 90Hz",
            "Camera: 50MP Main",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 54,
        category: "smartphones",
        name: "OPPO Reno 12 Pro",
        price: "Rs. 134,999",
        rating: "★★★★☆",
        reviews: "215 Reviews",
        image: "images/Smartphones/oppo-reno-12-pro.png",
        keyFeatures: [
            "80W SUPERVOOC fast charging",
            "Curved glass design",
            "AI Portrait enhancement",
            "5G Dual SIM support"
        ],
        specs: [
            "Chipset: MediaTek Dimensity 9200+",
            "RAM: 12GB",
            "Storage: 256GB",
            "Display: 6.7\" AMOLED 120Hz",
            "Camera: 50MP Main + 32MP Portrait",
            "Battery: 4,600mAh"
        ]
    },
    {
        id: 55,
        category: "smartphones",
        name: "Tecno Spark 20 Pro",
        price: "Rs. 44,999",
        rating: "★★★★☆",
        reviews: "387 Reviews",
        image: "images/Smartphones/tecno-spark-20-pro.png",
        keyFeatures: [
            "108MP Super Night Camera",
            "Dynamic Port notch",
            "33W Fast Charging",
            "HIOS based on Android 14"
        ],
        specs: [
            "Chipset: MediaTek Helio G99",
            "RAM: 8GB",
            "Storage: 256GB",
            "Display: 6.78\" FHD+ 120Hz",
            "Camera: 108MP Main",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 56,
        category: "smartphones",
        name: "Realme Narzo 70x 5G",
        price: "Rs. 49,999",
        rating: "★★★★☆",
        reviews: "411 Reviews",
        image: "images/Smartphones/realme-narzo-70x.png",
        keyFeatures: [
            "120Hz Bright Display",
            "Dynamic RAM Expansion up to 12GB",
            "45W SUPERVOOC Charge",
            "Mini Capsule 2.0 feature"
        ],
        specs: [
            "Chipset: MediaTek Dimensity 6100+",
            "RAM: 6GB",
            "Storage: 128GB",
            "Display: 6.72\" FHD+ 120Hz",
            "Camera: 50MP AI Main",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 57,
        category: "smartphones",
        name: "Infinix Note 40 Pro",
        price: "Rs. 59,999",
        rating: "★★★★☆",
        reviews: "265 Reviews",
        image: "images/Smartphones/infinix-note-40-pro.png",
        keyFeatures: [
            "JBL Tuned Stereo Speakers",
            "70W Wired Fast Charging",
            "MagCharge 15W Wireless Charging",
            "X1 Cheetah Gaming Engine"
        ],
        specs: [
            "Chipset: MediaTek Helio G99 Ultimate",
            "RAM: 8GB",
            "Storage: 256GB",
            "Display: 6.78\" AMOLED 120Hz",
            "Camera: 108MP Main with OIS",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 58,
        category: "smartphones",
        name: "Samsung Galaxy A55",
        price: "Rs. 160,000",
        rating: "★★★★☆",
        reviews: "Mid-Range Premium",
        image: "images/Smartphones/samsung-galaxy-a55.png",
        keyFeatures: [
            "Metal frame and Gorilla Glass Victus+",
            "IP67 water and dust resistance",
            "25W fast charging",
            "Premium mid-range experience"
        ],
        specs: [
            "Processor: Exynos 1480",
            "Display: 6.6-inch Super AMOLED 120Hz",
            "Camera: 50MP Main with OIS",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 59,
        category: "smartphones",
        name: "Samsung Galaxy A35",
        price: "Rs. 130,000",
        rating: "★★★★☆",
        reviews: "Affordable Mid-Range",
        image: "images/Smartphones/samsung-galaxy-a35.png",
        keyFeatures: [
            "Gorilla Glass Victus+ front",
            "IP67 water and dust resistance",
            "25W fast charging",
            "Reliable daily driver"
        ],
        specs: [
            "Processor: Exynos 1380",
            "Display: 6.6-inch Super AMOLED 120Hz",
            "Camera: 50MP Main with OIS",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 60,
        category: "smartphones",
        name: "Oppo Reno 11 Pro",
        price: "Rs. 190,000",
        rating: "★★★★☆",
        reviews: "Portrait Focused",
        image: "images/Smartphones/oppo-reno-11-pro.png",
        keyFeatures: [
            "80W SUPERVOOC Flash Charge",
            "Sleek, lightweight design",
            "Portrait photography focus",
            "Stylish aesthetics"
        ],
        specs: [
            "Processor: MediaTek Dimensity 8200",
            "Display: 6.7-inch AMOLED 120Hz",
            "Camera: 50MP Main + 32MP Telephoto Portrait",
            "Mid-range performance"
        ]
    },
    {
        id: 61,
        category: "smartphones",
        name: "Vivo V30 Pro",
        price: "Rs. 185,000",
        rating: "★★★★☆",
        reviews: "Camera Centric",
        image: "images/Smartphones/vivo-v30-pro.png",
        keyFeatures: [
            "Aura Light Portrait feature",
            "80W FlashCharge",
            "ZEISS Co-engineered cameras",
            "Stylish photography focus"
        ],
        specs: [
            "Processor: MediaTek Dimensity 8200",
            "Display: 6.78-inch AMOLED 120Hz",
            "Camera: ZEISS Co-engineered (50MP main, 50MP ultrawide, 50MP portrait)",
            "Portrait excellence"
        ]
    },
    {
        id: 62,
        category: "smartphones",
        name: "Xiaomi Redmi 13C",
        price: "Rs. 65,000",
        rating: "★★★☆☆",
        reviews: "Entry Level",
        image: "images/Smartphones/xiaomi-redmi-13c.png",
        keyFeatures: [
            "18W charging support",
            "Side-mounted fingerprint sensor",
            "AI face unlock",
            "Basic functionality"
        ],
        specs: [
            "Processor: MediaTek Helio G85",
            "Display: 6.74-inch 90Hz",
            "Camera: 50MP Main",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 63,
        category: "smartphones",
        name: "Samsung Galaxy M15",
        price: "Rs. 72,000",
        rating: "★★★★☆",
        reviews: "Battery Champion",
        image: "images/Smartphones/samsung-galaxy-m15.png",
        keyFeatures: [
            "Massive 6,000mAh battery",
            "25W fast charging",
            "4 generations of Android updates",
            "5 years of security updates"
        ],
        specs: [
            "Processor: MediaTek Dimensity 6100+",
            "Display: 6.5-inch Super AMOLED 90Hz",
            "Camera: 50MP Main",
            "Battery: 6,000mAh"
        ]
    },
    {
        id: 64,
        category: "smartphones",
        name: "Motorola Moto G Power 5G",
        price: "Rs. 85,000",
        rating: "★★★★☆",
        reviews: "Long Battery Life",
        image: "images/Smartphones/motorola-moto-g-power.png",
        keyFeatures: [
            "Multi-day battery life",
            "120Hz display",
            "5G connectivity",
            "Stereo speakers, NFC support"
        ],
        specs: [
            "Processor: MediaTek Dimensity 7020",
            "RAM: 8GB",
            "Storage: 128GB",
            "Display: 6.7\" FHD+ 120Hz",
            "Camera: 50MP Main Camera",
            "Battery: 5,000mAh"
        ]
    },
    {
        id: 65,
        category: "smartphones",
        name: "Poco F6 Pro",
        price: "Rs. 175,000",
        rating: "★★★★★",
        reviews: "Performance Focused",
        image: "images/Smartphones/poco-f6-pro.png",
        keyFeatures: [
            "Flagship performance",
            "High-resolution WQHD+ display",
            "120W HyperCharge",
            "LiquidCool Technology 4.0"
        ],
        specs: [
            "Processor: Snapdragon 8 Gen 2",
            "RAM: 12GB/16GB",
            "Storage: 256GB/512GB/1TB",
            "Display: 6.67\" WQHD+ AMOLED 120Hz",
            "Camera: 50MP Main Camera",
            "Battery: 5,000mAh"
        ]
    }
];
const pcComponents = [
    {
        id: 66,
        category: "parts",
        name: "AMD Ryzen 9 7950X",
        price: "Rs. 210,000",
        rating: "★★★★★",
        reviews: "High Performance",
        image: "images/PC Components/amd-ryzen-9-7950x.png",
        keyFeatures: [
            "16 cores and 32 threads",
            "Up to 5.7GHz boost clock",
            "AM5 platform support",
            "Integrated AMD Radeon Graphics"
        ],
        specs: [
            "Cores / Threads: 16 Cores / 32 Threads",
            "Max Boost Clock: Up to 5.7GHz",
            "Socket: AM5",
            "Memory Support: DDR5",
            "PCIe Support: 5.0"
        ]
    },
    {
        id: 67,
        category: "parts",
        name: "AMD Ryzen 7 7800X3D",
        price: "Rs. 155,000",
        rating: "★★★★★",
        reviews: "Gaming Optimized",
        image: "images/PC Components/amd-ryzen-7-7800x3d.png",
        keyFeatures: [
            "AMD 3D V-Cache technology",
            "Optimized for maximum gaming performance",
            "8 cores and 16 threads",
            "High efficiency design"
        ],
        specs: [
            "Cores / Threads: 8 Cores / 16 Threads",
            "Socket: AM5",
            "Memory Support: DDR5",
            "PCIe Support: 5.0",
            "3D V-Cache technology"
        ]
    },
    {
        id: 68,
        category: "parts",
        name: "AMD Ryzen 5 7600X",
        price: "Rs. 85,000",
        rating: "★★★★☆",
        reviews: "Mid-Range Excellence",
        image: "images/PC Components/amd-ryzen-5-7600x.png",
        keyFeatures: [
            "6 cores and 12 threads",
            "Up to 5.3GHz boost clock",
            "Integrated AMD Radeon Graphics",
            "AM5 platform ready"
        ],
        specs: [
            "Cores / Threads: 6 Cores / 12 Threads",
            "Max Boost Clock: Up to 5.3GHz",
            "Socket: AM5",
            "Memory Support: DDR5",
            "PCIe Support: 5.0"
        ]
    },
    {
        id: 69,
        category: "parts",
        name: "Intel Core i9-14900K",
        price: "Rs. 230,000",
        rating: "★★★★★",
        reviews: "Flagship Performance",
        image: "images/PC Components/intel-core-i9-14900k.png",
        keyFeatures: [
            "24 cores (8P + 16E) and 32 threads",
            "Up to 6.0 GHz turbo frequency",
            "Integrated Intel UHD Graphics 770",
            "LGA 1700 socket"
        ],
        specs: [
            "Cores / Threads: 24 Cores (8P + 16E) / 32 Threads",
            "Max Turbo Frequency: Up to 6.0 GHz",
            "Socket: LGA 1700",
            "Memory Support: DDR5 and DDR4",
            "PCIe Support: 5.0 and 4.0"
        ]
    },
    {
        id: 70,
        category: "parts",
        name: "Intel Core i7-14700K",
        price: "Rs. 165,000",
        rating: "★★★★★",
        reviews: "High-End Performance",
        image: "images/PC Components/intel-core-i7-14700k.png",
        keyFeatures: [
            "20 cores (8P + 12E) and 28 threads",
            "Up to 5.6GHz turbo frequency",
            "Integrated Intel UHD Graphics 770",
            "Ideal for gaming and content creation"
        ],
        specs: [
            "Cores / Threads: 20 Cores (8P + 12E) / 28 Threads",
            "Max Turbo Frequency: Up to 5.6GHz",
            "Socket: LGA 1700",
            "Memory Support: DDR5 and DDR4",
            "PCIe Support: 5.0 and 4.0"
        ]
    },
    {
        id: 71,
        category: "parts",
        name: "Intel Core i5-14600K",
        price: "Rs. 115,000",
        rating: "★★★★☆",
        reviews: "Balanced Performance",
        image: "images/PC Components/intel-core-i5-14600k.png",
        keyFeatures: [
            "14 cores (6P + 8E) and 20 threads",
            "Up to 5.3 GHz turbo frequency",
            "Integrated Intel UHD Graphics 770",
            "Excellent gaming performance"
        ],
        specs: [
            "Cores / Threads: 14 Cores (6P + 8E) / 20 Threads",
            "Max Turbo Frequency: Up to 5.3 GHz",
            "Socket: LGA 1700",
            "Memory Support: DDR5 and DDR4",
            "PCIe Support: 5.0 and 4.0"
        ]
    },
    {
        id: 72,
        category: "parts",
        name: "AMD Ryzen 9 5900X",
        price: "Rs. 130,000",
        rating: "★★★★☆",
        reviews: "Previous Gen Power",
        image: "images/PC Components/amd-ryzen-9-5900x.png",
        keyFeatures: [
            "12 cores and 24 threads",
            "Up to 4.8GHz boost clock",
            "AM4 platform compatibility",
            "Requires discrete graphics card"
        ],
        specs: [
            "Cores / Threads: 12 Cores / 24 Threads",
            "Max Boost Clock: Up to 4.8GHz",
            "Socket: AM4",
            "Memory Support: DDR4",
            "PCIe Support: 4.0"
        ]
    },
    {
        id: 73,
        category: "parts",
        name: "Intel Core i5-12400F",
        price: "Rs. 55,000",
        rating: "★★★★☆",
        reviews: "Budget Performance",
        image: "images/PC Components/intel-core-i5-12400f.png",
        keyFeatures: [
            "6 Performance Cores and 12 threads",
            "Up to 4.4GHz turbo frequency",
            "PCIe 5.0/4.0 support",
            "Requires discrete graphics card"
        ],
        specs: [
            "Cores / Threads: 6 Performance Cores / 12 Threads",
            "Max Turbo Frequency: Up to 4.4GHz",
            "Socket: LGA 1700",
            "Memory Support: DDR5 and DDR4",
            "Requires discrete graphics"
        ]
    },
    {
        id: 74,
        category: "parts",
        name: "AMD Ryzen 5 5600X",
        price: "Rs. 62,000",
        rating: "★★★★☆",
        reviews: "Popular Choice",
        image: "images/PC Components/amd-ryzen-5-5600x.png",
        keyFeatures: [
            "6 cores and 12 threads",
            "Up to 4.6GHz boost clock",
            "Wraith Stealth Cooler included",
            "Requires discrete graphics card"
        ],
        specs: [
            "Cores / Threads: 6 Cores / 12 Threads",
            "Max Boost Clock: Up to 4.6GHz",
            "Socket: AM4",
            "Memory Support: DDR4",
            "PCIe Support: 4.0"
        ]
    },
    {
        id: 75,
        category: "parts",
        name: "Intel Core i3-12100F",
        price: "Rs. 38,000",
        rating: "★★★☆☆",
        reviews: "Entry Level",
        image: "images/PC Components/intel-core-i3-12100f.png",
        keyFeatures: [
            "4 Performance Cores and 8 threads",
            "Up to 4.3GHz turbo frequency",
            "PCIe 5.0 and 4.0 support",
            "Requires discrete graphics card"
        ],
        specs: [
            "Cores / Threads: 4 Performance Cores / 8 Threads",
            "Max Turbo Frequency: Up to 4.3GHz",
            "Socket: LGA 1700",
            "Memory Support: DDR5 and DDR4",
            "Budget gaming processor"
        ]
    }
];
const gpus = [
    {
        id: 76,
        category: "parts",
        name: "NVIDIA GeForce RTX 4090",
        price: "Rs. 650,000",
        rating: "★★★★★",
        reviews: "Ultimate Performance",
        image: "images/PC Components - GPUs/nvidia-rtx-4090.png",
        keyFeatures: [
            "DLSS 3 (AI Frame Generation)",
            "4th Gen Tensor Cores & 3rd Gen RT Cores",
            "AV1 Encode/Decode support",
            "Requires significant power and cooling"
        ],
        specs: [
            "Memory: 24GB GDDR6X",
            "Architecture: Ada Lovelace",
            "Ultimate 4K gaming performance",
            "Professional creative workloads"
        ]
    },
    {
        id: 77,
        category: "parts",
        name: "NVIDIA GeForce RTX 4080 Super",
        price: "Rs. 420,000",
        rating: "★★★★★",
        reviews: "High-End Gaming",
        image: "images/PC Components - GPUs/nvidia-rtx-4080-super.png",
        keyFeatures: [
            "DLSS 3 (AI Frame Generation)",
            "Increased CUDA cores",
            "AV1 Encode/Decode support",
            "Exceptional 4K performance"
        ],
        specs: [
            "Memory: 16GB GDDR6X",
            "Architecture: Ada Lovelace",
            "High-end gaming graphics",
            "Creative applications ready"
        ]
    },
    {
        id: 78,
        category: "parts",
        name: "NVIDIA GeForce RTX 4070 Ti Super",
        price: "Rs. 310,000",
        rating: "★★★★★",
        reviews: "Powerful Performance",
        image: "images/PC Components - GPUs/nvidia-rtx-4070-ti-super.png",
        keyFeatures: [
            "DLSS 3 technology",
            "3rd Gen RT Cores",
            "Enhanced ray tracing",
            "1440p and 4K gaming"
        ],
        specs: [
            "Memory: 16GB GDDR6X",
            "Architecture: Ada Lovelace",
            "Great 1440p performance",
            "4K gaming capable"
        ]
    },
    {
        id: 79,
        category: "parts",
        name: "NVIDIA GeForce RTX 4070 Super",
        price: "Rs. 250,000",
        rating: "★★★★☆",
        reviews: "Upper Mid-Range",
        image: "images/PC Components - GPUs/nvidia-rtx-4070-super.png",
        keyFeatures: [
            "DLSS 3 technology",
            "3rd Gen RT Cores",
            "High-refresh-rate 1440p gaming",
            "Efficient performance"
        ],
        specs: [
            "Memory: 12GB GDDR6X",
            "Architecture: Ada Lovelace",
            "Excellent 1440p gaming",
            "Ray tracing capable"
        ]
    },
    {
        id: 80,
        category: "parts",
        name: "NVIDIA GeForce RTX 4060 Ti",
        price: "Rs. 350,000",
        rating: "★★★★☆",
        reviews: "Mid-Range Gaming",
        image: "images/PC Components - GPUs/nvidia-rtx-4060-ti.png",
        keyFeatures: [
            "DLSS 3 (AI Frame Generation)",
            "Excellent 1080p performance",
            "AV1 Encode/Decode support",
            "Efficient power consumption"
        ],
        specs: [
            "Memory: 8GB or 16GB GDDR6",
            "Architecture: Ada Lovelace",
            "High-performance 1080p gaming",
            "1440p capable"
        ]
    },
    {
        id: 81,
        category: "parts",
        name: "AMD Radeon RX 7900 XTX",
        price: "Rs. 390,000",
        rating: "★★★★★",
        reviews: "AMD Flagship",
        image: "images/PC Components - GPUs/amd-rx-7900-xtx.png",
        keyFeatures: [
            "DisplayPort 2.1 support",
            "AMD Radiance Display Engine",
            "AMD FSR support",
            "Chiplet design architecture"
        ],
        specs: [
            "Memory: 24GB GDDR6",
            "Architecture: RDNA 3 (Chiplet Design)",
            "Competitive high-end performance",
            "Improved ray tracing"
        ]
    },
    {
        id: 82,
        category: "parts",
        name: "AMD Radeon RX 7900 XT",
        price: "Rs. 315,000",
        rating: "★★★★☆",
        reviews: "High-End AMD",
        image: "images/PC Components - GPUs/amd-rx-7900-xt.png",
        keyFeatures: [
            "DisplayPort 2.1 support",
            "AMD Radiance Display Engine",
            "AMD FSR support",
            "Strong 4K performance"
        ],
        specs: [
            "Memory: 20GB GDDR6",
            "Architecture: RDNA 3 (Chiplet Design)",
            "High-refresh-rate 1440p gaming",
            "4K capable"
        ]
    },
    {
        id: 83,
        category: "parts",
        name: "AMD Radeon RX 7800 XT",
        price: "Rs. 205,000",
        rating: "★★★★☆",
        reviews: "Value Performance",
        image: "images/PC Components - GPUs/amd-rx-7800-xt.png",
        keyFeatures: [
            "DisplayPort 2.1 support",
            "AMD FSR technology",
            "Excellent 1440p gaming",
            "Great value proposition"
        ],
        specs: [
            "Memory: 16GB GDDR6",
            "Architecture: RDNA 3",
            "Upper mid-range performance",
            "1440p gaming optimized"
        ]
    },
    {
        id: 84,
        category: "parts",
        name: "NVIDIA GeForce RTX 3060 12GB",
        price: "Rs. 110,000",
        rating: "★★★★☆",
        reviews: "Popular Choice",
        image: "images/PC Components - GPUs/nvidia-rtx-3060.png",
        keyFeatures: [
            "DLSS 2 support",
            "2nd Gen RT Cores & 3rd Gen Tensor Cores",
            "Good value for 1080p gaming",
            "Large 12GB VRAM buffer"
        ],
        specs: [
            "Memory: 12GB GDDR6",
            "Architecture: Ampere",
            "Solid 1080p gaming performance",
            "Previous generation excellence"
        ]
    },
    {
        id: 85,
        category: "parts",
        name: "AMD Radeon RX 6600",
        price: "Rs. 85,000",
        rating: "★★★☆☆",
        reviews: "Budget Gaming",
        image: "images/PC Components - GPUs/amd-rx-6600.png",
        keyFeatures: [
            "AMD FSR (FidelityFX Super Resolution) support",
            "Good power efficiency",
            "Strong value proposition",
            "Efficient 1080p gaming"
        ],
        specs: [
            "Memory: 8GB GDDR6",
            "Architecture: RDNA 2",
            "Entry-level 1080p gaming",
            "Budget build friendly"
        ]
    }
];
const ram = [
    {
        id: 86,
        category: "parts",
        name: "Corsair Vengeance RGB 32GB (2x16GB) DDR5 6000MHz",
        price: "Rs. 48,000",
        rating: "★★★★★",
        reviews: "High-Speed RGB",
        image: "images/RAM/corsair-vengeance-rgb-32gb-ddr5.png",
        keyFeatures: [
            "Intel XMP 3.0 support",
            "Dynamic RGB lighting",
            "Custom cooling design",
            "High-speed DDR5 performance"
        ],
        specs: [
            "Capacity: 32GB (2x16GB)",
            "Type: DDR5",
            "Speed: 6000MHz",
            "Modern system compatibility",
            "RGB customization"
        ]
    },
    {
        id: 87,
        category: "parts",
        name: "G.Skill Trident Z5 RGB 32GB (2x16GB) DDR5 6400MHz",
        price: "Rs. 53,000",
        rating: "★★★★★",
        reviews: "Premium Performance",
        image: "images/RAM/gskill-trident-z5-rgb-32gb-ddr5.png",
        keyFeatures: [
            "Customizable RGB lighting via software",
            "Intel XMP 3.0 support for easy overclocking",
            "Sleek aluminum heatspreaders",
            "High clock speeds for maximum performance"
        ],
        specs: [
            "Capacity: 32GB (2 x 16GB)",
            "Type: DDR5",
            "Speed: 6400MHz",
            "Timings: CL32",
            "Enthusiast-grade memory"
        ]
    },
    {
        id: 88,
        category: "parts",
        name: "Kingston FURY Beast 16GB (2x8GB) DDR4 3200MHz",
        price: "Rs. 25,000",
        rating: "★★★★☆",
        reviews: "Reliable Performance",
        image: "images/RAM/kingston-fury-beast-16gb-ddr4.png",
        keyFeatures: [
            "Low-profile heat spreader design",
            "Intel XMP support for easy overclocking",
            "Plug N Play automatic overclocking",
            "Stylish and cost-effective"
        ],
        specs: [
            "Capacity: 16GB (2 x 8GB)",
            "Type: DDR4",
            "Speed: 3200MHz",
            "Gaming and video editing ready",
            "Compatible with DDR4 systems"
        ]
    },
    {
        id: 89,
        category: "parts",
        name: "Corsair Vengeance LPX 16GB (2x8GB) DDR4 3600MHz",
        price: "Rs. 28,000",
        rating: "★★★★☆",
        reviews: "Overclocking Ready",
        image: "images/RAM/corsair-vengeance-lpx-16gb-ddr4.png",
        keyFeatures: [
            "Low-profile design fits most builds",
            "Anodized aluminum heat spreader",
            "Intel XMP 2.0 support for simple overclocking",
            "Pure aluminum for faster heat dissipation"
        ],
        specs: [
            "Capacity: 16GB (2 x 8GB)",
            "Type: DDR4",
            "Speed: 3600MHz",
            "Ideal for systems with large CPU coolers",
            "Small form factor compatible"
        ]
    },
    {
        id: 90,
        category: "parts",
        name: "G.Skill Ripjaws V 32GB (2x16GB) DDR4 3200MHz",
        price: "Rs. 42,000",
        rating: "★★★★☆",
        reviews: "High Capacity",
        image: "images/RAM/gskill-ripjaws-v-32gb-ddr4.png",
        keyFeatures: [
            "Stylish Ripjaws V heat spreader design",
            "Intel XMP 2.0 support",
            "Rigorously tested for compatibility",
            "Multiple color options available"
        ],
        specs: [
            "Capacity: 32GB (2 x 16GB)",
            "Type: DDR4",
            "Speed: 3200MHz",
            "Great for content creation",
            "Demanding multitasking ready"
        ]
    }
];
const psuCasesCooling = [
    {
        id: 91,
        category: "parts",
        name: "Corsair RM850e 850W Gold PSU",
        price: "Rs. 48,000",
        rating: "★★★★★",
        reviews: "Reliable Power",
        image: "images/PSU, Cases & Cooling/corsair-rm850e-psu.png",
        keyFeatures: [
            "120mm rifle bearing fan with Zero RPM mode",
            "7-Year Warranty",
            "Fully modular design",
            "Low noise operation"
        ],
        specs: [
            "Wattage: 850W",
            "Rating: 80 PLUS Gold",
            "Modularity: Fully Modular",
            "Compliance: ATX 3.0, PCIe 5.0",
            "High-performance PC builds"
        ]
    },
    {
        id: 92,
        category: "parts",
        name: "Lian Li O11 Dynamic EVO Case",
        price: "Rs. 65,000",
        rating: "★★★★★",
        reviews: "Versatile Design",
        image: "images/PSU, Cases & Cooling/lian-li-o11-dynamic-evo.png",
        keyFeatures: [
            "Dual-chamber design",
            "Reversible layout options",
            "Extensive cooling support",
            "Tempered glass panels"
        ],
        specs: [
            "Type: Mid-Tower ATX",
            "Layout: Dual-chamber",
            "Panels: Tempered Glass (Front, Side)",
            "Motherboard Support: E-ATX, ATX, Micro-ATX, Mini-ITX",
            "Radiator Support: Up to three 360mm"
        ]
    },
    {
        id: 93,
        category: "parts",
        name: "NZXT H5 Flow RGB Case",
        price: "Rs. 42,000",
        rating: "★★★★☆",
        reviews: "Airflow Focused",
        image: "images/PSU, Cases & Cooling/nzxt-h5-flow-rgb.png",
        keyFeatures: [
            "Dedicated bottom intake fan for GPU",
            "Good cable management",
            "High-airflow front panel",
            "Included RGB fans"
        ],
        specs: [
            "Type: ATX Mid-Tower",
            "Panel: Tempered Glass",
            "Fans: 2x F120 RGB Core (included)",
            "Stylish airflow design",
            "Modern build aesthetics"
        ]
    },
    {
        id: 94,
        category: "parts",
        name: "Noctua NH-D15 CPU Cooler",
        price: "Rs. 41,000",
        rating: "★★★★★",
        reviews: "Legendary Performance",
        image: "images/PSU, Cases & Cooling/noctua-nh-d15-cooler.png",
        keyFeatures: [
            "Excellent RAM compatibility",
            "SecuFirm2™ mounting system",
            "Includes NT-H1 thermal paste",
            "Extremely quiet operation"
        ],
        specs: [
            "Type: Dual-Tower Air Cooler",
            "Fans: 2x Noctua NF-A15 140mm",
            "Heatpipes: 6",
            "Rivals AIO liquid coolers",
            "High-performance cooling"
        ]
    },
    {
        id: 95,
        category: "parts",
        name: "Deepcool LS720 360mm AIO",
        price: "Rs. 52,000",
        rating: "★★★★☆",
        reviews: "High-Performance Cooling",
        image: "images/PSU, Cases & Cooling/deepcool-ls720-aio.png",
        keyFeatures: [
            "Anti-Leak Technology",
            "Customizable infinity mirror ARGB pump cap",
            "4th Gen High-Performance pump",
            "Supports latest Intel and AMD sockets"
        ],
        specs: [
            "Type: 360mm AIO Liquid Cooler",
            "Fans: 3x 120mm ARGB FDB",
            "Pump: 4th Gen High-Performance",
            "Clean aesthetic design",
            "Customizable RGB lighting"
        ]
    },
    {
        id: 96,
        category: "parts",
        name: "Cooler Master Hyper 212 Black Edition",
        price: "Rs. 15,500",
        rating: "★★★★☆",
        reviews: "Budget Champion",
        image: "images/PSU, Cases & Cooling/cooler-master-hyper-212.png",
        keyFeatures: [
            "Wide socket compatibility",
            "Easy installation process",
            "Good value cooling performance",
            "Sleek black aesthetics"
        ],
        specs: [
            "Type: Single-Tower Air Cooler",
            "Heatpipes: 4 Direct Contact",
            "Fan: 1x SickleFlow 120",
            "Mid-range CPU compatible",
            "Popular budget choice"
        ]
    },
    {
        id: 97,
        category: "parts",
        name: "Corsair 4000D Airflow Case (Black)",
        price: "Rs. 38,000",
        rating: "★★★★☆",
        reviews: "Airflow Optimized",
        image: "images/PSU, Cases & Cooling/corsair-4000d-airflow.png",
        keyFeatures: [
            "High-airflow front panel design",
            "Corsair RapidRoute cable management",
            "Spacious interior for large components",
            "Easy build process"
        ],
        specs: [
            "Type: Mid-Tower ATX",
            "Panel: Tempered Glass",
            "Fans: 2x 120mm AirGuide included",
            "Airflow optimized design",
            "Clean cable management"
        ]
    },
    {
        id: 98,
        category: "parts",
        name: "Seasonic FOCUS GX-750 750W Gold PSU",
        price: "Rs. 42,000",
        rating: "★★★★★",
        reviews: "Premium Quality",
        image: "images/PSU, Cases & Cooling/seasonic-focus-gx-750.png",
        keyFeatures: [
            "10-Year Warranty",
            "Compact Size (140mm deep)",
            "Tight Voltage Regulation",
            "Hybrid Silent Fan Control"
        ],
        specs: [
            "Wattage: 750W",
            "Rating: 80+ Gold",
            "Modularity: Fully Modular",
            "Fan: Fluid Dynamic Bearing",
            "Reliable and quiet operation"
        ]
    },
    {
        id: 99,
        category: "parts",
        name: "Arctic P12 PWM PST (5 Pack)",
        price: "Rs. 12,500",
        rating: "★★★★☆",
        reviews: "Value Pack",
        image: "images/PSU, Cases & Cooling/arctic-p12-fan-pack.png",
        keyFeatures: [
            "Excellent performance/noise ratio",
            "Daisy-chain capability",
            "Optimized for static pressure",
            "PWM Sharing Technology"
        ],
        specs: [
            "Size: 120mm",
            "Speed: 200-1800 RPM (PWM PST)",
            "Bearing: Fluid Dynamic Bearing",
            "Pressure-optimized design",
            "Synchronized fan speed control"
        ]
    }
];
const storageDevices = [
    {
        id: 100,
        category: "parts",
        name: "Samsung T7 Shield Portable SSD 1TB",
        price: "Rs. 24,999",
        rating: "★★★★★",
        reviews: "210 Reviews",
        image: "images/Storage Devices/samsung-t7-shield-1tb.png",
        keyFeatures: [
            "Shock-resistant up to 3 meters",
            "Dynamic Thermal Guard",
            "Included USB Type-C to C and Type-C to A cables",
            "IP65 Water & Dust Resistant"
        ],
        specs: [
            "Capacity: 1TB",
            "Interface: USB 3.2 Gen 2",
            "Speed: Up to 1,050 MB/s",
            "Durability: IP65 Water & Dust Resistant",
            "Compatibility: PC, Mac, Android, Gaming Consoles"
        ]
    },
    {
        id: 101,
        category: "parts",
        name: "WD Blue SN580 NVMe SSD 1TB",
        price: "Rs. 18,999",
        rating: "★★★★☆",
        reviews: "155 Reviews",
        image: "images/Storage Devices/wd-blue-sn580-1tb.png",
        keyFeatures: [
            "WD nCache 4.0 technology",
            "Low power consumption",
            "Free cloning software available",
            "5-Year Limited Warranty"
        ],
        specs: [
            "Capacity: 1TB",
            "Form Factor: M.2 2280",
            "Interface: PCIe Gen4 NVMe",
            "Speed: Up to 4,150 MB/s",
            "Warranty: 5-Year Limited"
        ]
    },
    {
        id: 102,
        category: "parts",
        name: "SanDisk Ultra Dual Drive Go 128GB",
        price: "Rs. 3,499",
        rating: "★★★★☆",
        reviews: "1024 Reviews",
        image: "images/Storage Devices/sandisk-ultra-dual-drive.png",
        keyFeatures: [
            "Retractable design",
            "SanDisk Memory Zone app for easy file management",
            "5-year limited warranty",
            "Dual connector convenience"
        ],
        specs: [
            "Capacity: 128GB",
            "Interface: USB 3.0 / Type-C",
            "Speed: Up to 150 MB/s",
            "Design: Swivel cap, dual connector",
            "Compatibility: Phones, Tablets, PCs"
        ]
    },
    {
        id: 103,
        category: "parts",
        name: "Kingston XS2000 Portable SSD 1TB",
        price: "Rs. 21,499",
        rating: "★★★★☆",
        reviews: "175 Reviews",
        image: "images/Storage Devices/kingston-xs2000-1tb.png",
        keyFeatures: [
            "Shock-resistant design",
            "High-speed file transfers",
            "Rubber sleeve for protection",
            "Plug and play convenience"
        ],
        specs: [
            "Capacity: 1TB",
            "Interface: USB 3.2 Gen 2x2",
            "Speed: Up to 2,000 MB/s",
            "Durability: IP55 water resistant",
            "Compatibility: Windows, Mac, Android"
        ]
    },
    {
        id: 104,
        category: "parts",
        name: "Seagate Expansion Portable HDD 2TB",
        price: "Rs. 15,999",
        rating: "★★★★☆",
        reviews: "233 Reviews",
        image: "images/Storage Devices/seagate-expansion-2tb.png",
        keyFeatures: [
            "Plug-and-play setup",
            "Seagate Toolkit backup software",
            "Lightweight and portable design",
            "2-year limited warranty"
        ],
        specs: [
            "Capacity: 2TB",
            "Interface: USB 3.0",
            "Form Factor: 2.5-inch",
            "Compatibility: PC, Mac, PS5, Xbox",
            "Dependable everyday backups"
        ]
    },
    {
        id: 105,
        category: "parts",
        name: "Crucial P5 Plus 1TB NVMe SSD",
        price: "Rs. 22,999",
        rating: "★★★★★",
        reviews: "142 Reviews",
        image: "images/Storage Devices/crucial-p5-plus-1tb.png",
        keyFeatures: [
            "Micron 3D NAND technology",
            "Integrated Thermal Protection",
            "Hardware-based encryption",
            "Accelerated by Micron Authenticity"
        ],
        specs: [
            "Capacity: 1TB",
            "Form Factor: M.2 2280",
            "Interface: PCIe Gen4 NVMe",
            "Speed: Up to 6,600 MB/s",
            "Warranty: 5-Year Limited"
        ]
    },
    {
        id: 106,
        category: "parts",
        name: "Sabrent Rocket 4 Plus 2TB NVMe SSD",
        price: "Rs. 39,999",
        rating: "★★★★★",
        reviews: "89 Reviews",
        image: "images/Storage Devices/sabrent-rocket-4-plus-2tb.png",
        keyFeatures: [
            "Phison E18 Controller",
            "High-density 3D TLC NAND",
            "Advanced ECC and RAID support",
            "Pre-installed premium heatsink option"
        ],
        specs: [
            "Capacity: 2TB",
            "Form Factor: M.2 2280",
            "Interface: PCIe Gen4 NVMe",
            "Speed: Up to 7,100 MB/s",
            "Warranty: 5-Year Limited"
        ]
    },
    {
        id: 107,
        category: "parts",
        name: "LaCie Rugged Mini 4TB",
        price: "Rs. 28,999",
        rating: "★★★★☆",
        reviews: "104 Reviews",
        image: "images/Storage Devices/lacie-rugged-mini-4tb.png",
        keyFeatures: [
            "Shock, dust, and rain-resistant",
            "Includes 1-month Adobe Creative Cloud subscription",
            "Reversible USB-C cable",
            "Orange rubber sleeve for high visibility"
        ],
        specs: [
            "Capacity: 4TB",
            "Interface: USB 3.0 / USB-C",
            "Speed: Up to 130 MB/s",
            "Durability: Drop resistant up to 2 meters",
            "Compatibility: PC, Mac"
        ]
    },
    {
        id: 108,
        category: "parts",
        name: "Samsung 990 Pro 2TB NVMe SSD",
        price: "Rs. 72,000",
        rating: "★★★★★",
        reviews: "Flagship Performance",
        image: "images/Storage Devices/samsung-990-pro-2tb.png",
        keyFeatures: [
            "Advanced thermal control",
            "Nickel-coated controller",
            "Heat spreader label",
            "Samsung Magician software support"
        ],
        specs: [
            "Capacity: 2TB",
            "Interface: PCIe 4.0 NVMe",
            "Speed: Up to 7,450 MB/s Read",
            "Speed: Up to 6,900 MB/s Write",
            "Professional workloads ready"
        ]
    },
    {
        id: 109,
        category: "parts",
        name: "Samsung 980 Pro 1TB NVMe SSD",
        price: "Rs. 41,000",
        rating: "★★★★★",
        reviews: "High Performance",
        image: "images/Storage Devices/samsung-980-pro-1tb.png",
        keyFeatures: [
            "Nickel-coated controller for thermal management",
            "Samsung Magician software support",
            "Fast boot times",
            "Quick application loading"
        ],
        specs: [
            "Capacity: 1TB",
            "Interface: PCIe 4.0 NVMe",
            "Speed: Up to 7,000 MB/s Read",
            "Speed: Up to 5,000 MB/s Write",
            "Gaming and content creation"
        ]
    },
    {
        id: 110,
        category: "parts",
        name: "WD Black SN850X 2TB NVMe SSD",
        price: "Rs. 68,000",
        rating: "★★★★★",
        reviews: "Gaming Optimized",
        image: "images/Storage Devices/wd-black-sn850x-2tb.png",
        keyFeatures: [
            "Predictive Loading",
            "Overhead Balancing",
            "Adaptive Thermal Management",
            "Game Mode 2.0 (Windows only)"
        ],
        specs: [
            "Capacity: 2TB",
            "Interface: PCIe 4.0",
            "Speed: Up to 7,300 MB/s Read",
            "Speed: Up to 6,600 MB/s Write",
            "High read/write performance"
        ]
    },
    {
        id: 111,
        category: "parts",
        name: "Kingston NV2 1TB NVMe SSD",
        price: "Rs. 28,000",
        rating: "★★★★☆",
        reviews: "Budget Friendly",
        image: "images/Storage Devices/kingston-nv2-1tb.png",
        keyFeatures: [
            "Lower power consumption",
            "M.2 2280 form factor",
            "Affordable PCIe 4.0 performance",
            "Budget build compatible"
        ],
        specs: [
            "Capacity: 1TB",
            "Interface: PCIe 4.0 NVMe",
            "Speed: Up to 3,500 MB/s Read",
            "Speed: Up to 2,100 MB/s Write",
            "Everyday user suitable"
        ]
    },
    {
        id: 112,
        category: "parts",
        name: "Seagate BarraCuda 4TB HDD",
        price: "Rs. 35,000",
        rating: "★★★★☆",
        reviews: "High Capacity",
        image: "images/Storage Devices/seagate-barracuda-4tb.png",
        keyFeatures: [
            "Multi-Tier Caching Technology (MTC)",
            "Suitable for general desktop storage",
            "Large storage space",
            "Affordable price per terabyte"
        ],
        specs: [
            "Capacity: 4TB",
            "Interface: SATA 6Gb/s",
            "Form Factor: 3.5-inch",
            "Speed: 5400 RPM (typically)",
            "Desktop computer compatible"
        ]
    },
    {
        id: 113,
        category: "parts",
        name: "Crucial MX500 1TB SATA SSD",
        price: "Rs. 19,000",
        rating: "★★★★☆",
        reviews: "Reliable Upgrade",
        image: "images/Storage Devices/crucial-mx500-1tb.png",
        keyFeatures: [
            "Proven reliability",
            "Easy upgrade path for older systems",
            "Integrated Power Loss Immunity",
            "AES 256-bit hardware encryption support"
        ],
        specs: [
            "Capacity: 1TB",
            "Interface: 2.5-inch SATA III",
            "Speed: Up to 560 MB/s Read",
            "Speed: Up to 510 MB/s Write",
            "5-Year Limited Warranty"
        ]
    },
    {
        id: 114,
        category: "parts",
        name: "Synology DS224+ 2-Bay NAS",
        price: "Rs. 110,000",
        rating: "★★★★☆",
        reviews: "Network Storage",
        image: "images/Storage Devices/synology-ds224-plus.png",
        keyFeatures: [
            "Synology DiskStation Manager (DSM) OS",
            "Btrfs file system support for snapshots",
            "Synology Photos for photo management",
            "Surveillance Station support"
        ],
        specs: [
            "Bays: 2 (drives not included)",
            "Processor: Intel Celeron J4125 4-core",
            "RAM: 2GB DDR4 (expandable)",
            "Ports: 2x 1GbE LAN",
            "Home and small office use"
        ]
    }
];
const motherboards = [
    {
        id: 115,
        category: "parts",
        name: "ASUS ROG Strix X670E-F",
        price: "Rs. 145,000",
        rating: "★★★★★",
        reviews: "High-End AMD",
        image: "images/Motherboards/asus-rog-strix-x670e-f.png",
        keyFeatures: [
            "PCIe 5.0 x16 slot(s) and PCIe 5.0 M.2 slot(s)",
            "Robust VRM design for overclocking",
            "WiFi 6E and 2.5Gb Ethernet",
            "Premium ROG Strix aesthetics"
        ],
        specs: [
            "Chipset: AMD X670E",
            "Socket: AM5",
            "Form Factor: ATX",
            "AMD Ryzen 7000 series compatible",
            "Enthusiast-grade motherboard"
        ]
    },
    {
        id: 116,
        category: "parts",
        name: "MSI MAG B760 TOMAHAWK WIFI",
        price: "Rs. 82,000",
        rating: "★★★★☆",
        reviews: "Popular Mid-Range",
        image: "images/Motherboards/msi-mag-b760-tomahawk.png",
        keyFeatures: [
            "PCIe 5.0 x16 slot",
            "Multiple M.2 slots (Gen4)",
            "WiFi 6E and 2.5Gb Ethernet",
            "Extended heatsink design for VRM cooling"
        ],
        specs: [
            "Chipset: Intel B760",
            "Socket: LGA 1700",
            "Memory: DDR5",
            "Form Factor: ATX",
            "Intel 12th, 13th, 14th Gen compatible"
        ]
    },
    {
        id: 117,
        category: "parts",
        name: "Gigabyte B650 AORUS ELITE AX",
        price: "Rs. 78,000",
        rating: "★★★★☆",
        reviews: "Well-Rounded AMD",
        image: "images/Motherboards/gigabyte-b650-aorus-elite.png",
        keyFeatures: [
            "PCIe 5.0 M.2 support",
            "WiFi 6E connectivity",
            "Advanced Thermal Design",
            "Essential modern features"
        ],
        specs: [
            "Chipset: AMD B650",
            "Socket: AM5",
            "Memory: DDR5",
            "Modern Ryzen systems ready",
            "Balanced performance"
        ]
    },
    {
        id: 118,
        category: "parts",
        name: "ASUS TUF Gaming B550-PLUS",
        price: "Rs. 55,000",
        rating: "★★★★☆",
        reviews: "Reliable & Durable",
        image: "images/Motherboards/asus-tuf-gaming-b550-plus.png",
        keyFeatures: [
            "PCIe 4.0 x16 slot and PCIe 4.0 M.2 slot",
            "TUF components (military-grade)",
            "BIOS FlashBack feature",
            "Durable gaming standards"
        ],
        specs: [
            "Chipset: AMD B550",
            "Socket: AM4",
            "Memory: DDR4",
            "Form Factor: ATX",
            "AMD Ryzen 3000, 4000G, 5000 series compatible"
        ]
    },
    {
        id: 119,
        category: "parts",
        name: "ASRock B760M PG Lightning WiFi",
        price: "Rs. 49,000",
        rating: "★★★★☆",
        reviews: "Affordable Micro-ATX",
        image: "images/Motherboards/asrock-b760m-pg-lightning.png",
        keyFeatures: [
            "PCIe 4.0 x16 slot",
            "Multiple M.2 slots (Gen4)",
            "Integrated WiFi connectivity",
            "Compact Micro-ATX form factor"
        ],
        specs: [
            "Chipset: Intel B760",
            "Socket: LGA 1700",
            "Memory: DDR5",
            "Form Factor: Micro-ATX",
            "Intel 12th, 13th, 14th Gen compatible"
        ]
    }
];
const peripherals = [
    {
        id: 120,
        category: "parts",
        name: "Logitech G Pro X Superlight Wireless Mouse",
        price: "Rs. 45,000",
        rating: "★★★★★",
        reviews: "Ultra-Light Gaming",
        image: "images/Peripherals/logitech-g-pro-x-superlight.png",
        keyFeatures: [
            "Extremely lightweight minimalist design",
            "Pro-grade wireless performance",
            "High-precision HERO sensor",
            "Long battery life (up to 70 hours)"
        ],
        specs: [
            "Weight: <63g",
            "Sensor: HERO 25K (up to 25,600 DPI)",
            "Connectivity: Lightspeed Wireless",
            "Battery: Up to 70 hours",
            "Esports professional grade"
        ]
    },
    {
        id: 121,
        category: "parts",
        name: "Keychron K8 Pro Mechanical Keyboard",
        price: "Rs. 35,000",
        rating: "★★★★☆",
        reviews: "Customizable TKL",
        image: "images/Peripherals/keychron-k8-pro.png",
        keyFeatures: [
            "QMK/VIA programmability for custom keymaps",
            "Hot-swappable switch sockets (3-pin/5-pin)",
            "Mac/Windows compatibility switch",
            "South-facing RGB LEDs"
        ],
        specs: [
            "Layout: TKL (Tenkeyless, 87 keys)",
            "Switches: Gateron G Pro (Hot-swappable)",
            "Connectivity: Bluetooth 5.1 / USB Type-C Wired",
            "Keycaps: Double-shot PBT",
            "Battery: 4000mAh"
        ]
    },
    {
        id: 122,
        category: "parts",
        name: "LG UltraGear 27GP850-B Monitor",
        price: "Rs. 115,000",
        rating: "★★★★★",
        reviews: "Gaming Excellence",
        image: "images/Peripherals/lg-ultragear-27gp850.png",
        keyFeatures: [
            "Vibrant Nano IPS panel",
            "High refresh rate (165Hz, O/C 180Hz)",
            "Fast response time (1ms GtG)",
            "Wide viewing angles"
        ],
        specs: [
            "Size: 27-inch QHD (2560x1440)",
            "Panel: Nano IPS",
            "Refresh Rate: 165Hz (O/C 180Hz)",
            "Response Time: 1ms (GtG)",
            "Sync: G-SYNC Compatible, FreeSync Premium"
        ]
    },
    {
        id: 123,
        category: "parts",
        name: "Logitech MX Master 3S Mouse",
        price: "Rs. 36,000",
        rating: "★★★★☆",
        reviews: "Productivity Powerhouse",
        image: "images/Peripherals/logitech-mx-master-3s.png",
        keyFeatures: [
            "Ergonomic shape for comfort",
            "Ultra-quiet clicks",
            "MagSpeed scroll wheel",
            "Flow multi-device control"
        ],
        specs: [
            "Sensor: Darkfield High Precision (up to 8000 DPI)",
            "Scrolling: MagSpeed Electromagnetic",
            "Connectivity: Bluetooth Low Energy / Logi Bolt USB Receiver",
            "Battery: Rechargeable (up to 70 days)",
            "Precise tracking on any surface"
        ]
    },
    {
        id: 124,
        category: "parts",
        name: "Elgato Stream Deck MK.2",
        price: "Rs. 55,000",
        rating: "★★★★★",
        reviews: "Creator Control",
        image: "images/Peripherals/elgato-stream-deck-mk2.png",
        keyFeatures: [
            "Trigger actions in streaming software",
            "Visual feedback directly on keys",
            "Drag-and-drop setup",
            "Extensive plugin store for integrations"
        ],
        specs: [
            "Keys: 15 customizable LCD keys",
            "Interface: USB-C",
            "Stand: Detachable 45-degree stand",
            "Streaming software compatible",
            "Content creator optimized"
        ]
    }
];
console.log("All products loaded - Total:", laptops.length + smartphones.length + pcComponents.length + gpus.length + ram.length + psuCasesCooling.length + storageDevices.length + motherboards.length + peripherals.length);
