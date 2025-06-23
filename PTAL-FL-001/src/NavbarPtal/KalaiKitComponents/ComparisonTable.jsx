import { Check, X } from "lucide-react";
import { useTranslation } from "react-i18next";
const ComparisonTable = () => {
  const { t, i18n } = useTranslation();
  const data = [
    {
      benefit: t('kalaiKitTable.row1'),
      values: [true, true, false, true, false, true],
    },
    { benefit: t('kalaiKitTable.row2'), values: [true, false, true, false, true, true] },
    {
      benefit: t('kalaiKitTable.row3'),
      values: [true, true, false, true, false, true],
    },
    {
      benefit: t('kalaiKitTable.row4'),
      values: [true, false, false, false, false, false],
    },
    {
      benefit: t('kalaiKitTable.row5'),
      values: [true, false, true, false, false, true],
    },
    {
      benefit: t('kalaiKitTable.row6'),
      values: [true, false, false, true, false, false],
    },
    {
      benefit: t('kalaiKitTable.row7'),
      values: [true, false, false, false, false, false],
    },
  ];

  const headers = [
    t('kalaiKitTable.heading1'),
    t('kalaiKitTable.heading2'),
    t('kalaiKitTable.heading3'),
    t('kalaiKitTable.heading4'),
    t('kalaiKitTable.heading5'),
    t('kalaiKitTable.heading6'),
  ];

  const renderIcon = (status) =>
    status ? (
      <Check className="text-green-600 w-4 h-4 mx-auto" />
    ) : (
      <X className="text-black w-4 h-4 mx-auto" />
    );

  return (
    <div className="bg-[#f9f6f0] py-10 px-4 sm:px-6 lg:px-12">
      <div className="border-t border-gray-400 w-[90%] mx-auto mb-8"></div>
      <h3
        className="uppercase tracking-widest text-sm font-semibold text-gray-700 text-center"
        style={{ marginBottom: "10px" }}
      >
        {t('kalaiKitTable.subtitle')}
      </h3>
      <h2
        className="text-center text-3xl  text-red-700 mb-8 leading-tight"
        style={{ fontFamily: "Fondamento, cursive" }}
      >
        {t('kalaiKitTable.title')}
      </h2>

      {/* Wrapping container to allow scroll on small screens */}
      <div className="w-full overflow-x-auto">
        {/* Inner container to control scale and layout */}
        <div className="min-w-[700px] md:min-w-full mx-auto">
          <table className="text-left border-separate border-spacing-0 text-sm w-full">
            <thead>
              <tr>
                <th className="px-3 py-2 text-red-800 font-bold">{t('kalaiKitTable.benefits')}</th>
                {headers.map((header, idx) => (
                  <th
                    key={idx}
                    className={`px-3 py-2 font-semibold text-black uppercase text-xs text-center ${
                      idx === 0 ? "bg-yellow-400" : ""
                    } ${idx === 0 ? "rounded-tl-full rounded-tr-full" : ""}`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-black font-medium">
              {data.map((row, rowIdx) => (
                <tr key={rowIdx}>
                  <td className="px-3 py-4 border-t align-middle whitespace-pre-wrap">
                    {row.benefit}
                  </td>
                  {row.values.map((val, colIdx) => (
                    <td
                      key={colIdx}
                      className={`px-3 py-4 border-t text-center align-middle ${
                        colIdx === 0 ? "bg-yellow-400" : ""
                      } ${
                        colIdx === 0 && rowIdx === data.length - 1
                          ? "rounded-bl-full rounded-br-full"
                          : ""
                      }`}
                    >
                      {renderIcon(val)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
