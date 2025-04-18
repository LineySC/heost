const PurchaseOrder = require("./../models/purchaseOrderModele.js");
const PurchaseOrderLine = require("./../models/purchaseOrderLineModele.js");

exports.createPurchaseOrder = async (req, res) => {
  try {
    const { businessId, reference, supplier, dateOrder, lines } = req.body;
    const order = await PurchaseOrder.create(
      {
        businessId,
        reference,
        supplier,
        dateOrder,
        lines,
      },
      {
        includes: ["lines"],
      }
    );
    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.validateLines = async (req, res) => {
  try {
    const { lineId } = req.params;

    await PurchaseOrderLine.update(
      { status: "Reçu" },
      { where: { id: lineId } }
    );

    const line = await PurchaseOrderLine.findByPk(lineId);
    const lines = await PurchaseOrderLine.findAll({
      where: { purchaseId: line.purchaseId },
    });

    const receivedAll = lines.every((l) => l.status === "reçu");
    const receivedPartially = lines.some((l) => l.status === "partiel");

    const newStatus = receivedAll
      ? "recu_totalement"
      : receivedPartially
      ? " recu_partiellement"
      : "pending";

    await PurchaseOrder.update(
      { status: newStatus },
      { where: { id: line.achatId } }
    );

    res.status(200).json({ message: "Ligne validée" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.validateOrder = async (req, res) => {
  try {
    const { achatId } = req.params;

    await PurchaseOrderLine.update({ statut: "reçu" }, { where: { achatId } });
    await PurchaseOrder.update(
      { status: "recu_totalement" },
      { where: { id: achatId } }
    );

    res.staus(200).json({ message: "Achat validé totalement" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllOrder = async (req, res) => {
  try {
    const achats = await PurchaseOrder.findAll({
      includes: PurchaseOrderLine,
    });
    res.json(achats);
  } catch (error) {
    res.status(500).json({ error: "error serveur", details: error.message });
  }
};
