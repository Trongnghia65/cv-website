import { ArrowDown } from "lucide-react";

import Navbar from "../components/Navbar";
import MemberCard from "../components/MemberCard";

import { mockCvs } from "../data/mockCv";
import { useEffect, useState } from "react";
import { getCvs } from "../services/cvService";
import type { Cv } from "../types/cv";

function Home() {
  const [cvs, setCvs] = useState<Cv[]>([]);
  const fetchAllCvs = async () => {
    try {
      const response = await getCvs();
      if (!response) {
        throw new Error("Không thể tải danh sách CV");
      }
      setCvs(response);
      console.log("Danh sách CV:", response);
    } catch (error) {
      console.error("Error fetching CVs:", error);
    }
  };
  useEffect(() => {
    fetchAllCvs();
  }, []);
  return (
    <div>
      <Navbar />

      <main>
        {/* HERO */}

        <section className="hero">
          <div className="hero-content">
            <p className="hero-label">OUR TEAM</p>

            <h1>
              Meet the people
              <br />
              behind the project.
            </h1>

            <p className="hero-description">
              Khám phá thông tin và hồ sơ cá nhân của các thành viên trong nhóm.
            </p>

            <a href="#members" className="hero-button">
              Explore members
              <ArrowDown size={18} />
            </a>
          </div>

          <div className="hero-decoration">
            <div className="circle circle-1" />

            <div className="circle circle-2" />

            <div className="circle circle-3" />
          </div>
        </section>

        {/* MEMBERS */}

        <section id="members" className="members-section">
          <div className="container">
            <div className="members-heading">
              <div>
                <p className="section-label">TEAM MEMBERS</p>

                <h2>Our members</h2>
              </div>

              <p>{cvs.length} members</p>
            </div>

            <div className="members-grid">
              {cvs.map((cv) => (
                <MemberCard key={cv.id} cv={cv} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2026 CV Portfolio.</p>
      </footer>
    </div>
  );
}

export default Home;
