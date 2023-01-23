import { Dialog } from '@/components/Dialog';
import { Product } from '@/types/product';

interface Props {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductDetailsDialog({ isOpen, onClose, product }: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Content>
        <div>
          <Dialog.Title className="capitalize">
            {product?.name} details
          </Dialog.Title>
          <div className="mt-4 space-y-4 text-neutral-400">
            <div>ID: {product?.id}</div>
            <div>Name: {product?.name}</div>
            <div>Year: {product?.year}</div>
            <div className="space-y-1.5">
              <div className="font-medium">Color:</div>
              <div
                className="h-10 w-full rounded"
                style={{
                  backgroundColor: product?.color,
                }}
              />
              <div className="px-0.5 md:flex md:justify-between md:space-x-2 2xl:block 2xl:space-x-0">
                <div className="w-6 font-medium 2xl:w-full">
                  {product?.color}
                </div>
                <div className="lowercase text-neutral-600">
                  {product?.pantone_value}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Dialog.Content>
    </Dialog>
  );
}
