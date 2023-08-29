import Image from "next/image";
import HeroSection from "./components/HeroSection";
import ImageCarousel from "./components/ImageCarousel";
import YoutubeVideos from "./components/YoutubeVideos";

import useBroadcasterID from "./useBroadcasterID";
import useTwitchClips from "./useTwitchClips";

export default async function Home() {
  const imageArray = [
    {"src": "https://images.squarespace-cdn.com/content/v1/5bccd5717788971625e09ffc/1556577767604-8C9DRPVWF53XWNFX0DOR/v_franklin_chop_2048x1536.jpg?format=1500w", "name": "Grand Theft Auto V"},
    {"src": "https://i.pinimg.com/originals/38/fd/31/38fd316db422c192fc05fa75070488d5.jpg", "name": "Payday 2"},
    {"src": "https://cdn.dribbble.com/userupload/3742262/file/original-dd8447f8cb41947bd6afb95601e8e414.jpg", "name": "The Legend of Zelda"},
    {"src": "https://live.staticflickr.com/4090/5124977032_a37cf64a4b_b.jpg", "name": "World of Warcraft"},
    {"src": "https://live.staticflickr.com/4090/5124977032_a37cf64a4b_b.jpg", "name": "World of Warcraft"},
    {"src": "https://live.staticflickr.com/4090/5124977032_a37cf64a4b_b.jpg", "name": "World of Warcraft"},
  ];



    // const broadcasterID = await useBroadcasterID("splixter");
    const twitchClips = await useTwitchClips("splixter");
    console.log(twitchClips);
    // console.log(broadcasterID)
    console.log(process.env.TWITCH_CLIENT_ID);
    console.log(process.env.TWITCH_ACCESS_TOKEN);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between w-full">
      <HeroSection />
      <div className="flex flex-col w-full items-center max-w-6xl">
        <div className="flex flex-col">
          <h3 className="font-quattrocento text-6xl py-8">
            Some Games I Enjoy
          </h3>
          <ImageCarousel imageArray={imageArray} />
        </div>
        <div className="flex flex-col w-full">
          <h3 className="font-quattrocento text-6xl py-8">Latest Youtube Videos</h3>
          <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed?listType=user_uploads&list=splixter512"
            frameborder="0">  
          </iframe>
          {/* <YoutubeVideos /> */}
        </div>
        <div className="flex flex-col w-full">
          <h3 className="font-quattrocento text-6xl py-8">Latest Twitch Clips</h3>
          <div className="flex flex-wrap">
            {twitchClips?.map((clip) => {
              return (
              <iframe 
                key={clip.id}
                src={`${clip.embed_url}&parent=localhost`}
                height="350"
                width="350"
                allowFullScreen
                ></iframe>
                );
              })}
            </div>






        </div>
        <div className="flex flex-col w-full">
          <h3 className="font-quattrocento text-6xl py-8">Support Me</h3>
          <p>If you'd like to support me here's how you can!</p>
          <a>Donate</a>
          <a>Merch</a>
          <a>Patreon</a>
        </div>
      </div>
    </main>
  );
}
