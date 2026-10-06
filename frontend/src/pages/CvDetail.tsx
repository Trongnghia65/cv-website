import { useEffect, useState } from "react";
import { ArrowLeft, Mail, Phone, MapPin } from "lucide-react";

import { Link, useParams } from "react-router-dom";

import Navbar from "../components/Navbar";
import ProfileHeader from "../components/ProfileHeader";

import type { Cv } from "../types/cv";
import { getCvById } from "../services/cvService";

function CvDetail() {
  const { id } = useParams();

  const [cv, setCv] = useState<Cv | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCv = async () => {
      try {
        if (!id) {
          setError("ID không hợp lệ");
          return;
        }

        const data = await getCvById(Number(id));

        setCv(data);
      } catch (error) {
        console.error("Error fetching CV:", error);
        setError("Không thể tải thông tin CV");
      } finally {
        setLoading(false);
      }
    };

    fetchCv();
  }, [id]);

  // Đang tải dữ liệu
  if (loading) {
    return (
      <>
        <Navbar />

        <main className="not-found">
          <h1>Loading...</h1>
        </main>
      </>
    );
  }

  // Không tìm thấy CV hoặc API lỗi
  if (error || !cv) {
    return (
      <>
        <Navbar />

        <main className="not-found">
          <h1>CV not found</h1>

          <Link to="/">Back to home</Link>
        </main>
      </>
    );
  }

  return (
    <div>
      <Navbar />

      <main className="cv-page">
        <div className="cv-container">
          {/* BACK */}

          <Link to="/" className="back-button">
            <ArrowLeft size={18} />
            Back to members
          </Link>

          {/* PROFILE */}

          <ProfileHeader cv={cv} />

          {/* CONTENT */}

          <div className="simple-cv-grid">
            {/* ABOUT */}

            <section className="cv-section">
              <p className="section-label">INTRODUCTION</p>

              <h2>About Me</h2>

              <p className="about-text">{cv.summary}</p>
            </section>

            {/* CONTACT */}

            <section className="cv-section">
              <p className="section-label">CONTACT</p>

              <h2>Contact Information</h2>

              <div className="contact-list">
                {/* EMAIL */}

                <a href={`mailto:${cv.email}`} className="contact-item">
                  <div className="contact-icon">
                    <Mail size={20} />
                  </div>

                  <div>
                    <span>Email</span>

                    <strong>{cv.email}</strong>
                  </div>
                </a>

                {/* PHONE */}

                <a href={`tel:${cv.phone}`} className="contact-item">
                  <div className="contact-icon">
                    <Phone size={20} />
                  </div>

                  <div>
                    <span>Phone</span>

                    <strong>{cv.phone}</strong>
                  </div>
                </a>

                {/* ADDRESS */}

                <div className="contact-item">
                  <div className="contact-icon">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <span>Address</span>

                    <strong>{cv.address}</strong>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

export default CvDetail;
