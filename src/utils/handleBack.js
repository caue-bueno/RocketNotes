import { useNavigate } from "react-router-dom";

export function handleBack() {
  const  navigate = useNavigate();
    navigate(-1);
}