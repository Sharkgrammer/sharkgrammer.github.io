import Sites from "../../assets/data/sites.json";
import SiteDisplay from "../site/SiteDisplay.tsx";

function SiteView() {

    return (
        <div className="p-2">
            <div className="grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                {Sites.map((site, index) => (
                    <div key={index}>
                        <SiteDisplay title={site.title} url={site.url} desc={site.desc} img={site.img}/>
                    </div>
                ))}
            </div>
        </div>
    )

}

export default SiteView