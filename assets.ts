
// Dynamically generate gallery images from photo1.webp to photo29.webp
const galleryImages = Array.from({ length: 29 }, (_, i) => `/gallery/photo${i + 1}.webp`);

export const IMAGES = {
  logo: "/logo.svg",
  hero: "/hero.webp",
  about: "/about.webp",
  canyon: "/canyon.webp",
  ruins: "/ruins.webp",
  flowers: "/flowers.webp",
  ausangate: "/ausangate.webp",
  ausangate3: "/ausangate3.webp",
  hat: "/hat.webp",
  costa: "/costa.webp",
  cr1: "/cr1.webp",
  cr2: "/cr2.webp",
  cr3: "/cr3.webp",
  crbg: "/crbg.webp",
  crbg2: "/crbg2.webp",
  diamante1: "/diamante1.webp",
  diamante2: "/diamante2.webp",
  chirripo1: "/chirripo1.webp",
  chirripo2: "/chirripo2.webp",
  chirripo3: "/chirripo3.webp",
  chirripo4: "/chirripo4.webp",
  chirripo5: "/chirripo5.webp",
  chirripo6: "/chirripo6.webp",
  chirripo7: "/chirripo7.webp",
  mayra: "/mayra.webp",
  drum: "/drum.webp",
  wachuma: "/wachuma.webp",
  connect: "/connect.webp",
  private: "/private.webp",
  day1: "/day1.webp",
  day2: "/day2.webp",
  day3: "/day3.webp",
  day4: "/day4.webp",
  day5: "/day5.webp",
  day6: "/day6.webp",
  day7: "/day7.webp",
  fireVideo: "/fire.mp4",
  bungalow: "/bungalow.webp",
  zoltan: "/zoltan.webp",
  kittel: "/kittel.webp",
  juchuy: "/juchuy.webp",
  maestros: "/maestros.webp",
  gallery: galleryImages
};

export const CREDITS: Record<string, string> = {
    chirripo1: `Photo by <a href="https://unsplash.com/@azzamaulana?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Azza Maulana</a> on <a href="https://unsplash.com/photos/a-waterfall-in-the-middle-of-a-forest-iBRtUZd7ykQ?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo2: `Photo by <a href="https://unsplash.com/@fatihsimsek?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Fatih Simsek</a> on <a href="https://unsplash.com/photos/a-green-parrot-perched-on-top-of-a-tree-branch-bBK5m8pPf9w?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo3: `Photo by <a href="https://unsplash.com/@moisesvisuals?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Moises Guillen</a> on <a href="https://unsplash.com/photos/a-green-plant-in-a-field-JxeoLcp-wuo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo4: `Photo by <a href="https://unsplash.com/@abhiver?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Abhi Verma</a> on <a href="https://unsplash.com/photos/mountain-and-forest-landscape-with-a-resort-at-the-bottom-x2AenH9eQhk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo5: `Photo by <a href="https://unsplash.com/@patresinger?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Patrick Langwallner</a> on <a href="https://unsplash.com/photos/aerial-view-of-green-trees-beside-body-of-water-during-daytime-LUN3Yb6U-U4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo6: `Photo by <a href="https://unsplash.com/@hdbernd?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Bernd 📷 Dittrich</a> on <a href="https://unsplash.com/photos/a-waterfall-with-a-man-standing-in-front-of-it-D7rcTJDZEDM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`,
    chirripo7: `Photo by <a href="https://unsplash.com/@ehmoy?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Moisés Vazquez</a> on <a href="https://unsplash.com/photos/green-trees-near-river-under-cloudy-sky-during-daytime-pMYmKvVsCss?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer" class="underline hover:text-pacha-gold transition-colors">Unsplash</a>`
};
