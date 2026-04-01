import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [exiting, setExiting] = useState(false);
  const [ready, setReady] = useState(false);

  if (percent >= 100 && !ready) {
    setTimeout(() => setReady(true), 400);
  }

  useEffect(() => {
    if (!ready) return;
    import("./utils/initialFX").then((module) => {
      setExiting(true);
      setTimeout(() => {
        if (module.initialFX) module.initialFX();
        setIsLoading(false);
      }, 800);
    });
  }, [ready]);

  return (
    <div className={`loader ${exiting ? "loader-exit" : ""}`}>
      <div className="loader-content">
        <div className="loader-name">AR</div>
        <div className="loader-bar-track">
          <div
            className="loader-bar-fill"
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>
        <div className="loader-percent">{Math.min(percent, 100)}%</div>
      </div>
    </div>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
