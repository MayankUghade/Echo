import { FetchArticle } from "@/app/actions/fetcharticle";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Summarize } from "@/app/actions/Analyze";

export default async function Dashboard() {
  const article = await FetchArticle(
    "https://techcrunch.com/2024/08/24/starliner-will-return-to-earth-uncrewed-astronauts-staying-on-iss-until-february/"
  );
  Summarize(article);

  return (
    <div className="p-5">
      <div className="text-center mt-3">
        <h1 className="text-2xl font-bold ">
          Insert the article <span className="text-purple-500">link</span> you'd
          like to convert
        </h1>
      </div>
      {/* Form to add a link */}
      <div className="mt-5 p-5 lg:container flex items-center justify-center gap-2 ">
        <Input type="text" className="max-w-[1000px]" />
        <Button>Submit</Button>
      </div>
    </div>
  );
}
