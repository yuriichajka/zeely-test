import { FC } from "react";

type Props = {
  title?: string;
  isCompleted?: boolean;
  imgUrl?: string;
  imgAlt?: string;
  info?: string;
  isLocked?: boolean;
};

const ProgressItem: FC<Props> = ({
  title,
  isCompleted,
  imgUrl,
  imgAlt,
  info,
  isLocked,
}) => {
  return (
    <div className="wrap-progress-item">
      <div className="progress-item-title d-flex">
        <img
          src={
            isCompleted
              ? "/images/check-box-marked.svg"
              : "/images/check-box-empty.svg"
          }
          alt="Status checkbox"
          className=""
        />
        <div className="d-flex align-items-center pt-1">{title}</div>
        {isLocked && (
          <div className="locked d-flex ml-2">
            <img src="/images/locked.svg" alt="Locked logo" />
            <div>Locked</div>
          </div>
        )}
      </div>

      {!isCompleted && !isLocked && (
        <div className="d-flex progress-item-info">
          <div className="mt-2">
            <div className="progress-item-info-text mb-2">{info}</div>
            <button className="btn btn-action">Build creative</button>
          </div>

          <img src={imgUrl} alt={imgAlt} width={90} height={90} />
        </div>
      )}
    </div>
  );
};

export default ProgressItem;
