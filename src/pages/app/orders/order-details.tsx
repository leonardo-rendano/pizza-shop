import { DialogContent, DialogDescription, DialogHeader } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { DialogTitle } from "@radix-ui/react-dialog";

export function OrderDetails() {
	return (
		<DialogContent>
			<DialogHeader>
				<DialogTitle>Pedido: 1324234243</DialogTitle>
				<DialogDescription>Detalhes do pedido</DialogDescription>
			</DialogHeader>

			<div className="space-y-6">
				<Table>
					<TableBody>
						<TableRow>
							<TableCell className="text-muted-foreground">Status</TableCell>
							<TableCell className="flex justify-end">
								<div className="flex items-center gap-2">
									<span className="h-2 w-2 rounded-full bg-slate-400" />
									<span className="font-medium text-muted-foreground">
										Pendente
									</span>
								</div>
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell className="text-muted-foreground">Cliente</TableCell>
							<TableCell className="flex justify-end">
								Leonardo Rendano
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell className="text-muted-foreground">Telefone</TableCell>
							<TableCell className="flex justify-end">
								991827384
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell className="text-muted-foreground">E-mail</TableCell>
							<TableCell className="flex justify-end">
								leonardo.rendano@email.com
							</TableCell>
						</TableRow>

						<TableRow>
							<TableCell className="text-muted-foreground">Realizado há</TableCell>
							<TableCell className="flex justify-end">
								há 3 minutos
							</TableCell>
						</TableRow>
					</TableBody>
				</Table>

				<Table>
					<TableHeader>
						<TableRow>
							<TableHead>Produto</TableHead>
							<TableHead className="text-right">Qtd.</TableHead>
							<TableHead className="text-right">Preço</TableHead>
							<TableHead className="text-right">Subtotal</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						<TableRow>
							<TableCell>Pizza Frango Família</TableCell>
							<TableCell className="text-right">3</TableCell>
							<TableCell className="text-right">R$ 69,90</TableCell>
							<TableCell className="text-right">R$ 209,70</TableCell>
						</TableRow>
						<TableRow>
							<TableCell>Pizza Margherita Família</TableCell>
							<TableCell className="text-right">1</TableCell>
							<TableCell className="text-right">R$ 69,90</TableCell>
							<TableCell className="text-right">R$ 69,90</TableCell>
						</TableRow>
					</TableBody>
					<TableFooter>
						<TableRow>
							<TableCell colSpan={3}>Total do pedido</TableCell>
							<TableCell className="text-right font-medium">
								R$ 279,60
							</TableCell>
						</TableRow>
					</TableFooter>
				</Table>
			</div>
		</DialogContent>
	)
}