import React from 'react';



const FilmList = ({filmList=[]}) => {

  return (
    <>
    
    { Object.values(filmList).map((data,index) => {
        if (data) {
          return (
            <div className="container">
              <div key={data.title} >
                <div className="accordion-item">
                  <h2 className="accordion-header">
                    <div className="card">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    
                        <h1>{data.title}</h1> 
                     
                      </button>
                    </div>
                    
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <strong>Episode {data.episode_id}</strong> 
                      <br/>
                      {data.opening_crawl}
                    </div>
                  </div>
                </div>
              </div> 
                
            
            </div>
            
              

            	
    	   )	
    	 }
    	 return null
    }) }
    </>
  );
}

export default FilmList;