import React from "react";

interface Props {
  fill: string;
}

export default function HomeIcon({ fill }: Props) {
  return (
    <svg
      className='icon'
      fill={fill}
      viewBox="0 0 100 50"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M24.9501 45V35.2H26.4341V39.4H31.1801V35.2H32.6641V45H31.1801V40.618H26.4341V45H24.9501ZM37.8491 45.168C37.1864 45.168 36.5891 45.0187 36.0571 44.72C35.5344 44.412 35.1191 43.9873 34.8111 43.446C34.5031 42.8953 34.3491 42.256 34.3491 41.528C34.3491 40.8 34.5031 40.1653 34.8111 39.624C35.1284 39.0733 35.5531 38.6487 36.0851 38.35C36.6171 38.042 37.2098 37.888 37.8631 37.888C38.5258 37.888 39.1184 38.042 39.6411 38.35C40.1731 38.6487 40.5931 39.0733 40.9011 39.624C41.2184 40.1653 41.3771 40.8 41.3771 41.528C41.3771 42.256 41.2184 42.8953 40.9011 43.446C40.5931 43.9873 40.1731 44.412 39.6411 44.72C39.1091 45.0187 38.5118 45.168 37.8491 45.168ZM37.8491 43.894C38.2038 43.894 38.5304 43.8053 38.8291 43.628C39.1371 43.4507 39.3844 43.1893 39.5711 42.844C39.7578 42.4893 39.8511 42.0507 39.8511 41.528C39.8511 41.0053 39.7578 40.5713 39.5711 40.226C39.3938 39.8713 39.1511 39.6053 38.8431 39.428C38.5444 39.2507 38.2178 39.162 37.8631 39.162C37.5084 39.162 37.1771 39.2507 36.8691 39.428C36.5704 39.6053 36.3278 39.8713 36.1411 40.226C35.9544 40.5713 35.8611 41.0053 35.8611 41.528C35.8611 42.0507 35.9544 42.4893 36.1411 42.844C36.3278 43.1893 36.5704 43.4507 36.8691 43.628C37.1678 43.8053 37.4944 43.894 37.8491 43.894ZM42.9819 45V38.056H44.2979L44.4239 39.036C44.6479 38.6813 44.9419 38.4013 45.3059 38.196C45.6793 37.9907 46.1086 37.888 46.5939 37.888C47.6953 37.888 48.4606 38.322 48.8899 39.19C49.1419 38.7887 49.4779 38.4713 49.8979 38.238C50.3273 38.0047 50.7893 37.888 51.2839 37.888C52.1519 37.888 52.8333 38.1493 53.3279 38.672C53.8226 39.1947 54.0699 39.974 54.0699 41.01V45H52.5859V41.164C52.5859 39.82 52.0726 39.148 51.0459 39.148C50.5233 39.148 50.0939 39.344 49.7579 39.736C49.4313 40.128 49.2679 40.688 49.2679 41.416V45H47.7839V41.164C47.7839 39.82 47.2659 39.148 46.2299 39.148C45.7166 39.148 45.2919 39.344 44.9559 39.736C44.6293 40.128 44.4659 40.688 44.4659 41.416V45H42.9819ZM59.0542 45.168C58.3728 45.168 57.7662 45.0187 57.2342 44.72C56.7115 44.412 56.3008 43.9873 56.0022 43.446C55.7035 42.9047 55.5542 42.2747 55.5542 41.556C55.5542 40.828 55.6988 40.1887 55.9882 39.638C56.2868 39.0873 56.6975 38.658 57.2202 38.35C57.7522 38.042 58.3682 37.888 59.0682 37.888C59.7495 37.888 60.3422 38.042 60.8462 38.35C61.3502 38.6487 61.7422 39.05 62.0222 39.554C62.3022 40.058 62.4422 40.6133 62.4422 41.22C62.4422 41.3133 62.4375 41.416 62.4282 41.528C62.4282 41.6307 62.4235 41.7473 62.4142 41.878H57.0102C57.0568 42.55 57.2762 43.0633 57.6682 43.418C58.0695 43.7633 58.5315 43.936 59.0542 43.936C59.4742 43.936 59.8242 43.8427 60.1042 43.656C60.3935 43.46 60.6082 43.1987 60.7482 42.872H62.2322C62.0455 43.5253 61.6722 44.0713 61.1122 44.51C60.5615 44.9487 59.8755 45.168 59.0542 45.168ZM59.0542 39.106C58.5595 39.106 58.1208 39.2553 57.7382 39.554C57.3555 39.8433 57.1222 40.282 57.0382 40.87H60.9582C60.9302 40.3287 60.7388 39.8993 60.3842 39.582C60.0295 39.2647 59.5862 39.106 59.0542 39.106Z" />
      <path d="M55.0667 8.64004L45.7333 0.640039C44.72 -0.226628 43.24 -0.199961 42.2667 0.640039C42.2133 0.680039 42.16 0.720039 42.12 0.773372L32.9333 8.64004C32.32 9.17337 32 9.92004 32 10.6667V16H34.6667V10.6667L36.6933 8.92004L41.9867 4.40004L44 2.66671L46.0267 4.40004L51.3067 8.92004L53.3333 10.6667V21.3334H48V16C48 14.52 46.8 13.3334 45.3333 13.3334H42.6667C41.2 13.3334 40 14.52 40 16V21.3334H34.6667V18.6667H32V21.3334C32 22.8 33.2 24 34.6667 24H40C41.4667 24 42.6667 22.8 42.6667 21.3334V16H45.3333V21.3334C45.3333 22.8 46.5333 24 48 24H53.3333C54.8 24 56 22.8 56 21.3334V10.6667C56 9.92004 55.68 9.17337 55.0667 8.64004Z" />
    </svg>
  );
}
