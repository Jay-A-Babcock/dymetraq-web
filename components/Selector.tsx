"use client";

type SelectorItem = {
  value: string | number;
  label: string;
};

type SelectorGroup = {
  label: string;
  items: SelectorItem[];
};

type SelectorProps = {
  label: string;
  items?: SelectorItem[]; // flat list
  groups?: SelectorGroup[]; // grouped list (Region | State)
  selected: (string | number)[];
  onToggle: (value: string | number) => void;
  height?: number;
};

export default function Selector({
  label,
  items,
  groups,
  selected,
  onToggle,
}: SelectorProps) {
  return (
    <>
      <div className="filter-label">{label}</div>

      <div className="dt-selector">
        {/* GROUPED MODE (Region | State) */}
        {groups &&
          groups.map((group) => (
            <div key={group.label} className="dt-selector-group">
              <div className="dt-selector-group-label">{group.label}</div>

              {group.items.map((item) => (
                <label key={item.value} className="dt-selector-item">
                  <input
                    type="checkbox"
                    checked={selected.includes(item.value)}
                    onChange={() => onToggle(item.value)}
                  />
                  {item.label}
                </label>
              ))}
            </div>
          ))}

        {/* FLAT MODE (Authorities, Entities, NIGP Codes) */}
        {items &&
          items.map((item) => (
            <label key={item.value} className="dt-selector-item">
              <input
                type="checkbox"
                checked={selected.includes(item.value)}
                onChange={() => onToggle(item.value)}
              />
              {item.label}
            </label>
          ))}

        {/* EMPTY STATE */}
        {!items && !groups && (
          <div className="selector-empty">No items available</div>
        )}
      </div>
    </>
  );
}
