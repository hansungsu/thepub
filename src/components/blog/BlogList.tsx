import {
  ChevronLeft,
  ChevronRight,
  Copy,
  CreditCard,
  File,
  Home,
  LineChart,
  ListFilter,
  MoreVertical,
  Package,
  Package2,
  PanelLeft,
  Search,
  Settings,
  ShoppingCart,
  Truck,
  Users2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export function BlogList() {
  return (
    <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
      <div className="mx-auto grid w-full container max-w-screen-xl">
        <button className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent">
          <div className="flex w-full flex-col gap-1">
            <div className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="font-semibold">William Smith</div>
              </div>
              <div className="ml-auto text-xs text-muted-foreground">
                9 months ago
              </div>
            </div>
            <div className="text-xs font-medium">Meeting Tomorrow</div>
          </div>
          <div className="line-clamp-2 text-xs text-muted-foreground">
            Hi, let's have a meeting tomorrow to discuss the project. I've been
            reviewing the project details and have some ideas I'd like to share.
            It's crucial that we align on our next steps to ensure the project's
            success. Please come prepared with any questions or insights you may
            have. Looking forward to
          </div>
          <div className="flex items-center gap-2">
            <Badge>meeting</Badge>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              meeting
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
              work
            </div>
            <div className="inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
              important
            </div>
          </div>
        </button>
        <Card x-chunk="dashboard-05-chunk-3">
          <CardHeader className="px-7">
            <CardTitle>Orders</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Customer</TableHead>
                  <TableHead className="hidden sm:table-cell">Type</TableHead>
                  <TableHead className="hidden sm:table-cell">Status</TableHead>
                  <TableHead className="hidden md:table-cell">Date</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-accent">
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Sale</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Fulfilled
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Refund</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Noah Williams</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      noah@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    Subscription
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Fulfilled
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-25
                  </TableCell>
                  <TableCell className="text-right">$350.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emma Brown</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Sale</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Fulfilled
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-26
                  </TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Sale</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Fulfilled
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Liam Johnson</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      liam@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Sale</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Fulfilled
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-23
                  </TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Olivia Smith</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      olivia@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Refund</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="outline">
                      Declined
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-24
                  </TableCell>
                  <TableCell className="text-right">$150.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <div className="font-medium">Emma Brown</div>
                    <div className="hidden text-sm text-muted-foreground md:inline">
                      emma@example.com
                    </div>
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">Sale</TableCell>
                  <TableCell className="hidden sm:table-cell">
                    <Badge className="text-xs" variant="secondary">
                      Fulfilled
                    </Badge>
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    2023-06-26
                  </TableCell>
                  <TableCell className="text-right">$450.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
