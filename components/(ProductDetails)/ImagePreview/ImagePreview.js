"use client";
import { Image } from "antd";
import { useState } from "react";

const ImagePreview = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-4">
        <div className="w-40 h-40 rounded overflow-hidden">
          <Image
            preview={{
              visible: false,
            }}
            className="w-full h-full object-cover"
            src="https://i.postimg.cc/KzWR47xN/FOSFO-COURT-BLEU-PALE-AUDVIK47382-720x.webp"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="w-40 h-40 rounded overflow-hidden">
          <Image
            preview={{
              visible: false,
            }}
            className="w-full h-full object-cover"
            src="https://i.postimg.cc/4Nkp5ZR1/032521-AUDVIK-ECOMM-FOSFO-COURT-NOIR-1403-720x.webp"
            onClick={() => setVisible(true)}
          />
        </div>
        <div className="w-40 h-40 rounded overflow-hidden">
          <Image
            preview={{
              visible: false,
            }}
            className="w-full h-full object-cover"
            src="https://i.postimg.cc/G2vm3Wgc/032521-AUDVIK-ECOMM-FOSFO-COURT-ORANGE-1372-720x.webp"
            onClick={() => setVisible(true)}
          />
        </div>
      </div>
      <div style={{ display: "none" }}>
        <Image.PreviewGroup
          preview={{
            visible,
            onVisibleChange: (vis) => setVisible(vis),
          }}
        >
          <Image src="https://i.postimg.cc/KzWR47xN/FOSFO-COURT-BLEU-PALE-AUDVIK47382-720x.webp" />
          <Image src="https://i.postimg.cc/4Nkp5ZR1/032521-AUDVIK-ECOMM-FOSFO-COURT-NOIR-1403-720x.webp" />
          <Image src="https://i.postimg.cc/G2vm3Wgc/032521-AUDVIK-ECOMM-FOSFO-COURT-ORANGE-1372-720x.webp" />
        </Image.PreviewGroup>
      </div>
    </>
  );
};

export default ImagePreview;
