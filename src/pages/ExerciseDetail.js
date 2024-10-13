import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { exerciseOptions, fetchData, youtubeOptions } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Loader from "../components/Loader";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      setIsLoading(true); // Set loading to true when starting to fetch
      try {
        const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
        const youtubeSearchUrl =
          "https://youtube-search-and-download.p.rapidapi.com";

        // Fetch exercise details
        const exerciseDetailData = await fetchData(
          `${exerciseDbUrl}/exercises/exercise/${id}`,
          exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

        // Fetch exercise videos from YouTube
        const exerciseVideosData = await fetchData(
          `${youtubeSearchUrl}/search?query=${
            exerciseDetailData?.name || ""
          } exercise`,
          youtubeOptions
        );
        setExerciseVideos(exerciseVideosData?.contents || []);

        // Fetch similar exercises by target muscle
        const targetMuscleExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/target/${exerciseDetailData?.target}`,
          exerciseOptions
        );
        setTargetMuscleExercises(targetMuscleExercisesData);

        // Fetch similar exercises by equipment
        const equipmentExercisesData = await fetchData(
          `${exerciseDbUrl}/exercises/equipment/${exerciseDetailData?.equipment}`,
          exerciseOptions
        );
        setEquipmentExercises(equipmentExercisesData);
      } catch (error) {
        console.error("Error fetching exercise data:", error);
      } finally {
        setIsLoading(false); // Ensure loading is turned off after data fetch
      }
    };

    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchExercisesData();
  }, [id]);

  if (isLoading) return <Loader />; // Display loader while fetching data

  if (!exerciseDetail?.name) return <div>No Data Available</div>; // Check for valid data

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail?.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
