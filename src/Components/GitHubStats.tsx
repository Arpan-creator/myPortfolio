import React from "react";
import { Image, Button } from "@mantine/core";
import { IconBrandGithub } from "@tabler/icons-react";

const GitHubStats = () => {
  const githubUsername = "Arpan-creator";
  const githubStatsUrl = `https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=radical`;
  const githubStreakUrl = `https://streak-stats.demolab.com?user=${githubUsername}&theme=radical`;

  return (
    <div className="px-16 md-mx:px-8 sm-mx:px-4 mx-20 lg-mx:mx-10 md-mx:mx-0   my-10  font-mono" id="GitHubStats">
      <h1 className="text-4xl sm:text-3xl xs:text-2xl mb-10 font-bold text-center text-white">
        <span className="text-primaryColor">&nbsp;</span>GitHub Stats
      </h1>
      <div
        data-aos="flip-left"
        data-aos-duration="800"
        className="w-[70%] lg:w-full shadow-[0_0_10px_0_#64FFDA50] m-auto flex flex-col gap-6 border border-primaryColor p-8 rounded-3xl sm:p-4"
      >
        <div className="text-3xl flex gap-2 items-center text-white font-semibold sm:text-2xl xs:text-xl">
          My GitHub Stats{" "}
          <IconBrandGithub className="w-10 text-primaryColor h-10 sm:w-7 sm:h-7" />
        </div>
        {/* Display stats and streak images in column format */}
        <div className="flex flex-col justify-center gap-4">
          <Image src={githubStatsUrl} alt="GitHub Stats" className="mx-auto rounded-md h-[200px] w-[400px]" />
          <Image src={githubStreakUrl} alt="GitHub Streak" className="mx-auto rounded-md h-[200px] w-[400px]" />
        </div>
        <Button
          fullWidth
          component="a"
          href={`https://github.com/${githubUsername}`}
          target="_blank"
          rightSection={<IconBrandGithub size={20} />}
          className="!text-bgColor !font-bold"
          variant="filled"
          size="lg"
          radius="lg"
          color="#64FFDA"
        >
          View on GitHub
        </Button>
      </div>
    </div>
  );
};

export default GitHubStats;
