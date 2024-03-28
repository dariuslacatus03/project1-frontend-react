import { BarChart } from "@mui/x-charts";
import { AnimeProps } from "../model/Anime";

export default function GenreChart(
                                {
                                    stateAnimeList,
                                }:{
                                    stateAnimeList : AnimeProps[]
                                }
){

    const genreCounts: { [genre: string]: number } = {};

    stateAnimeList.forEach(anime => {
        genreCounts[anime.genre] = (genreCounts[anime.genre] || 0) + 1;
    });

    return (
        <div className='action-form my-chart'>
            <BarChart
              sx={{
                '.MuiChartsAxis-root .MuiChartsAxis-line': {
                    stroke: 'white',
                },
                '.MuiChartsAxis-root .MuiChartsAxis-tick': {
                    stroke: 'white',
                },
                '.MuiChartsAxis-root .MuiChartsAxis-tickLabel': {
                    fill: 'white',
                },
              }}
              xAxis={[
                {
                  id: 'barCategories',
                  data: Object.keys(genreCounts),
                  scaleType: 'band',
                },
              ]}
              series={[
                {
                  data: Object.values(genreCounts)
                },
              ]}
              
              width={700}
              height={400}

            />
          </div>
    )
}