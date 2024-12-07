import React from "react";
// import NewsCard from "../components/NewsCard";

const news = [
  {
    title: "Sainz says helping Ferrari to win constructors’ title would be ‘perfect goodbye’ in final race together",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188332117",
  },
  {
    title: "Doohan reacts to ‘amazing’ early F1 debut as he outlines Alpine’s expectations",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188341186",
  },
  {
    title: "F1 TV nominated for Apple TV App of the Year award",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9South/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Qatar/2187744376",
  },
  {
    title: "Lawson reveals he’ll know about his future ‘next week’ as he claims he ‘feels ready’ to drive for Red Bull",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188343114",
  },
  {
    title: "‘There’s still time to go and win some races’ – Magnussen opens up on his exciting next chapter with BMW",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Practice/2188515663",
  },
  {
    title: "NEED TO KNOW: The most important facts, stats and trivia ahead of the 2024 Abu Dhabi Grand Prix",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9Centre/f_auto/q_auto/fom-website/2024/Abu%20Dhabi/Need_To_Know_Abu_Dhabi_05122024",
  },
  {
    title: "AS IT HAPPENED: Follow all the build-up ahead of the Abu Dhabi Grand Prix weekend",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Previews/2188352900",
  },
  {
    title: "He’s made it personal’ – Russell accuses Verstappen of ‘crossing a line’ over Qatar stewards’ room fallout",
    imageUrl: "https://media.formula1.com/image/upload/f_auto,c_limit,w_1440,q_auto/t_16by9North/f_auto/q_auto/trackside-images/2024/F1_Grand_Prix_of_Abu_Dhabi___Practice/2188522908",
  },
];

const Home = () => (
  <div
    style={{
      backgroundImage: `url('https://images2.alphacoders.com/135/1352897.png')`,
      backgroundSize: "cover",
      backgroundAttachment: "fixed",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      minHeight: "100vh",
      color: "white",
    }}
  >
    {/* Хедер */}
    <div
      style={{
        textAlign: "center",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1 style={{ fontSize: "10vw", fontWeight: "bold", margin: 0 }}>Cool Race</h1>
    </div>

    {/* Контент */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "20px",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      {/* Маленькие карточки */}
      {news.slice(0, 4).map((item, index) => (
        <div
          key={index}
          style={{
            flex: "0 1 calc(60% - 20px)", // Размер маленьких карточек
            maxWidth: "calc(45% - 20px)",
            position: "relative",
            borderRadius: "5px",
            overflow: "hidden",
            height: "300px", // Высота карточек
          }}
        >
          {/* Картинка карточки */}
          <div
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></div>

          {/* Белая подложка текста */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1rem" }}>{item.title}</h3>
          </div>
        </div>
      ))}

      {/* Большая карточка */}
      <div
        style={{
          flex: "0 1 100%",
          position: "relative",
          backgroundImage: `url('https://www.thedrive.com/wp-content/uploads/2023/09/29/F68YPHfWUAAEEin.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        {/* Затемнение на всю карточку */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            zIndex: 1,
          }}
        ></div>

        <div
          style={{
            position: "relative",
            zIndex: 2,
            padding: "20px",
            width: "100%",
            color: "white",
          }}
        >
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              marginBottom: "10px",
              wordBreak: "break-word",
              lineHeight: "1.2",
            }}
          >
            Six rookie drivers hit the track <br /> in first practice at Yas Marina
          </h1>
          <p style={{ fontSize: "1.2rem", marginBottom: "20px" }}>
            Six regular drivers sat out first practice in Abu Dhabi, with Ryo Hirakawa, <br />
            Luke Browning, Felipe Drugovich, Isack Hadjar, <br />
            Arthur Leclerc, and Ayumu Iwasa all running in the session.
          </p>
          <a
            href="https://youtu.be/dQw4w9WgXcQ?si=yW8qZ1wNxmGo75d2"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "10px 20px",
              backgroundColor: "white",
              color: "black",
              textDecoration: "none",
              fontWeight: "bold",
              borderRadius: "5px",
              opacity: "0.9",
              transition: "transform 0.3s, background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            Watch on YouTube
          </a>
        </div>
      </div>

      {/* Маленькие карточки после большой */}
      {news.slice(4).map((item, index) => (
        <div
          key={index}
          style={{
            flex: "0 1 calc(60% - 20px)", // Размер маленьких карточек
            maxWidth: "calc(45% - 20px)",
            position: "relative",
            borderRadius: "5px",
            overflow: "hidden",
            height: "300px", // Высота карточек
          }}
        >
          {/* Картинка карточки */}
          <div
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          ></div>

          {/* Белая подложка текста */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "100%",
              backgroundColor: "white",
              color: "black",
              padding: "10px",
              boxSizing: "border-box",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "1rem" }}>{item.title}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Home;
