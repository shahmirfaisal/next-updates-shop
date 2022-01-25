import { useEffect } from "react";

export const AdBanner = () => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <ins
      class="adsbygoogle"
      style={{ display: "block", width: "100%", height: "400px" }}
      data-ad-client="ca-pub-6488425149234248"
      data-ad-slot="8018598422"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
