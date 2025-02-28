import { InputCommitment } from "@/common";
import { SendIcon } from "@/ui/icons/SendIcon";
import { InboxIcon } from "@/ui/icons/InboxIcon";
import { TruncatedHex } from "@/ui/TruncatedHex";

type Props = {
  commitment: InputCommitment;
};

export function CommitmentAddresses({ commitment }: Props) {
  return (
    <div className="flex flex-col justify-center gap-2 text-xs">
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0">
          <SendIcon />
        </div>
        <div className="font-mono text-white">
          <TruncatedHex hex={commitment.txFrom} />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <div className="flex-shrink-0">
          <InboxIcon />
        </div>
        <div className="font-mono text-white">
          <TruncatedHex hex={commitment.txTo} />
        </div>
      </div>
    </div>
  );
}
