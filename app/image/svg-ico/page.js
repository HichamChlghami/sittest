





import Design from '../../components/design';

function App() {
  const title_home = "SVG to ICO Converter";
  const des_home = "Convert from SVG to ICO online with <span class='sitfile_span'>sitfile</span> Free, Fast and secure";

  const title1 = "How to convert from SVG to ICO?";
  const des1 = "1. Begin by selecting your SVG files with the 'Choose SVG' button.";
  const des2 = "2. Initiate the conversion process by clicking 'Convert to ICO'.";
  const des3 = "3. Once the status reads 'Done', hit 'Download ICO' to retrieve your converted files.";

  const title2 = "Simplicity at its core";
  const how_des1 = "Just upload your SVG files and tap 'Convert'. Our tool guarantees the highest quality ICO conversion.";

  const title3 = "Unbeatable features";
  const how_des2 = "Effortlessly convert batches of SVG images to ICO with our tool, which also accommodates animated SVG files.";

  const title4 = "Free and secure";
  const how_des3 = "Enjoy the benefits of a free, secure, and universally compatible tool accessible from any web browser. For added security and privacy, files are automatically deleted after a few hours.";

  const type_file = 'SVG';
  const format_type = '.svg';

  return (
    <>
      <Design 
        format_type={format_type}
        type_file={type_file}
        title_home={title_home}
        des_home={des_home}
        title1={title1}
        des1={des1}
        des2={des2}
        des3={des3}
        title2={title2}
        how_des1={how_des1}
        title3={title3}
        how_des2={how_des2}
        title4={title4}
        how_des3={how_des3}
      />
<title> convert svg to ico</title>
  <meta name="description" content="Convert From image To ICO Online Free, Fast, Secure and in few clicks" />

  <link rel="canonical" href="https://www.sitfile.com/image/svg-ico" />
    </>
  );
}

export default App;
