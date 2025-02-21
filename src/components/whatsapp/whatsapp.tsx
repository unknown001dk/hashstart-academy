import React from "react";

const FloatingWhatsApp: React.FC = () => {
    const phoneNumber = "9363883007"; // Replace with your WhatsApp number
    const message = encodeURIComponent("Hi, I need some help!");

    return (
        <a 
            href={`https://wa.me/${phoneNumber}?text=${message}`} 
            target="_blank" 
            rel="noopener noreferrer"
            style={{
                position: "fixed",
                bottom: "90px",
                right: "20px",
                backgroundColor: "#169e49",
                width: "55px",
                height: "55px",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                zIndex: 0,
            }}
        >
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
                alt="WhatsApp" 
                width="40" 
                height="40"
                style={{ borderRadius: "50%" }}
            />
        </a>
    );
};

export default FloatingWhatsApp;

