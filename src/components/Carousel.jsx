

function Carousel ()
{
    return (
        <>
            <div className="carousel rounded-tl-lg">
                <div id="item1" className="carousel-item">
                    <img src="/imagesNew/cityline.jpeg" className="w-full"/>
                    {/* <p className="title">Going Beyond the Numbers</p> */}
                </div>
                <div id="item2" className="carousel-item">
                    <img src="/imagesNew/bookkeeping.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item">
                    <img src="/imagesNew/payroll.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item">
                    <img src="/imagesNew/document.png" className="w-full" />
                </div>
                <div id="item5" className="carousel-item">
                    <img src="/imagesNew/analysis.png" className="w-full" />
                </div>
            </div>
            <div className="carousel-btns container mx-auto flex justify-center py-2">
                <a href="#item1" id="btn-1" className="item btn btn-wide bg-green-500">Home</a>
                <a href="#item2" id="btn-2" className="item btn btn-wide bg-green-600 rounded-none">Bookkeeping Services</a>
                <a href="#item3" id="btn-3" className="btn btn-wide bg-green-700 rounded-none">Payroll Services</a>
                <a href="#item4" id="btn-4" className="btn btn-wide bg-green-800 rounded-none">Document Services</a>
                <a href="#item5" id="btn-5" className="btn btn-wide bg-green-900 ">Analysis & Reporting</a>

            </div>
        </>
    )
}
 export default Carousel;