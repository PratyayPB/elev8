import { MoveDownLeft, MoveUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

function Stats() {
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Platform</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-xl md:text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
                This is the start of something new
              </h2>
              <p className="text-lg lg:max-w-sm leading-relaxed tracking-tight text-muted-foreground text-left">
                Managing a small business today is already tough. Avoid further
                complications by ditching outdated, tedious trade methods. Our
                goal is to streamline SMB trade, making it easier and faster than
                ever.
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid text-left grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 w-full gap-2">
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md overflow-hidden">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary shrink-0" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-4xl tracking-tighter text-left font-regular">
                      500.000
                    </span>
                    <span className="text-muted-foreground text-xs tracking-normal whitespace-nowrap">
                      +20.1%
                    </span>
                  </div>
                  <p className="text-base leading-relaxed tracking-tight text-muted-foreground text-left">
                    Monthly active users
                  </p>
                </div>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md overflow-hidden">
                <MoveDownLeft className="w-4 h-4 mb-10 text-destructive shrink-0" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-4xl tracking-tighter text-left font-regular">
                      20.105
                    </span>
                    <span className="text-muted-foreground text-xs tracking-normal whitespace-nowrap">
                      -2%
                    </span>
                  </div>
                  <p className="text-base leading-relaxed tracking-tight text-muted-foreground text-left">
                    Daily active users
                  </p>
                </div>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md overflow-hidden">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary shrink-0" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-4xl tracking-tighter text-left font-regular">
                      $523.520
                    </span>
                    <span className="text-muted-foreground text-xs tracking-normal whitespace-nowrap">
                      +8%
                    </span>
                  </div>
                  <p className="text-base leading-relaxed tracking-tight text-muted-foreground text-left">
                    Monthly recurring revenue
                  </p>
                </div>
              </div>
              <div className="flex gap-0 flex-col justify-between p-6 border rounded-md overflow-hidden">
                <MoveUpRight className="w-4 h-4 mb-10 text-primary shrink-0" />
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-1">
                    <span className="text-3xl lg:text-4xl tracking-tighter text-left font-regular">
                      $1052
                    </span>
                    <span className="text-muted-foreground text-xs tracking-normal whitespace-nowrap">
                      +2%
                    </span>
                  </div>
                  <p className="text-base leading-relaxed tracking-tight text-muted-foreground text-left">
                    Cost per acquisition
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Stats };
